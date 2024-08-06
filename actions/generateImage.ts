import { createPicture } from "@/database/pictureRepo";
import { downloadAndUploadImage } from "@/lib/s3";
import { PictureStatus } from "@/prisma/enums";
import Replicate from "replicate";

export async function generateImage(userId: string, userPrompt: string) {
  const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN,
  });

  console.log("userId:", userId);
  console.log("prompt:", userPrompt);

  const systemPrompt = process.env.PROMPT_PICTURE_STYLE || "manga style, ";
  const prompt = systemPrompt + userPrompt;

  const input = {
    prompt: prompt,
    guidance: 3.5,
    num_outputs: 1,
    aspect_ratio: "1:1",
    output_format: "png",
    output_quality: 80,
    prompt_strength: 0.8,
  };

  const output = await replicate.run("black-forest-labs/flux-dev", { input });

  if (Array.isArray(output) && output.length > 0) {
    const imageUrl = output[0];

    const url = await downloadAndUploadImage(imageUrl);

    const tags: string[] = [];
    // 保存到数据库
    const picture = {
      userId: userId,
      prompt: userPrompt,
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

