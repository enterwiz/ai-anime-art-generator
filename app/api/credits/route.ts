import { getUserCredits } from "@/actions/credits";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { userId }: { userId: string | null } = auth();
  if (!userId) {
    const ret = JSON.stringify({ credits: 0, error: "unauthorized" });
    return new NextResponse(ret, {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
  const userCredits = await getUserCredits(userId);
  const left = userCredits.free.left;
  const ret = JSON.stringify({ credits: left });

  return new NextResponse(ret, {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

