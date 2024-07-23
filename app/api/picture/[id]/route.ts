import { findPictureById } from "@/database/pictureRepo";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id") || "";

  const picture = await findPictureById(id);

  return new Response(JSON.stringify(picture), { status: 200 });
}

