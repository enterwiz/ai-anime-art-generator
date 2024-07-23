import { createPicture } from "@/database/pictureRepo";
import { downloadAndUploadImage } from "@/lib/s3";
import { PictureStatus } from "@/prisma/enums";
import Replicate from "replicate";

export async function generateImage(userId: string, prompt: string) {
  const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN,
  });

  console.log("userId:", userId);
  console.log("prompt:", prompt);

  const systemPrompt = process.env.PROMPT_PICTURE_STYLE || "manga style, ";
  const input = systemPrompt + prompt;

  const output = await replicate.run(
    "stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b",
    {
      input: {
        prompt: input,
      },
    }
  );

  if (Array.isArray(output) && output.length > 0) {
    const imageUrl = output[0];

    const url = await downloadAndUploadImage(imageUrl);

    const tags: string[] = [];
    // 保存到数据库
    const picture = {
      userId: userId,
      prompt: prompt,
      tags: tags,
      params: { input: input, tags: tags },
      url: url,
      status: PictureStatus.ONLINE,
    };

    const ret = await createPicture(picture);

    return ret;
  }

  throw new Error("Failed to generate image");
}

