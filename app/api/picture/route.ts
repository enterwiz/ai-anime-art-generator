import { createPicture, findPictures } from "@/database/pictureRepo";
import { PictureStatus } from "@/prisma/enums";
import { Picture } from "@/prisma/types";
import { Insertable } from "kysely";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const picture: Insertable<Picture> = {
    userId: body.userId,
    prompt: body.prompt,
    tags: body.tags,
    status: PictureStatus.ONLINE,
    url: body.url,
  };
  await createPicture(picture);
}

export async function GET(req: NextRequest) {
  const body = await req.json();
  const userId = body.userId;
  const pictures = await findPictures({ userId });
  return new Response(JSON.stringify(pictures), { status: 200 });
}

