import { generateNanoIdFilename } from "@/lib/utils";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import axios from "axios";

export async function downloadAndUploadImage(imageUrl: string) {
  const s3 = new S3Client({
    region: "auto",
    endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId: `${process.env.R2_ACCESS_KEY_ID}`,
      secretAccessKey: `${process.env.R2_SECRET_ACCESS_KEY}`,
    },
    // logger: console,
  });

  try {
    const response = await axios({
      method: "GET",
      url: imageUrl,
      responseType: "arraybuffer",
    });
    console.log("download success");

    const s3Key = generateNanoIdFilename("png");
    console.log("s3Key:", s3Key);

    const uploadParams = new PutObjectCommand({
      Bucket: process.env.R2_BUCKET_NAME,
      Key: s3Key,
      Body: response.data,
    });

    const ret = await s3.send(uploadParams);
    console.log("upload succeeded:", ret);
    return getPublicObjectUrl(s3Key);
  } catch (e) {
    console.log("upload failed:", e);
    throw e;
  }
}

export function getPublicObjectUrl(s3Key: string) {
  return `https://${process.env.R2_PUBLIC_DOMAIN}/${s3Key}`;
}

