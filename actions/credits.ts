import { UserCredits } from "@/types/user";
import { clerkClient } from "@clerk/nextjs/server";

export async function checkUserCredits(
  userId: string,
  count: number
): Promise<boolean> {
  const credits = await getUserCredits(userId);
  return checkCredits(credits, count);
}

export async function consumeUserCredits(userId: string, count: number) {
  var user = await clerkClient.users.getUser(userId);
  var credits = user.privateMetadata.credits
    ? (user.privateMetadata.credits as UserCredits)
    : generateInitialUserCredits();

  consumeCredits(credits, count);

  await clerkClient.users.updateUserMetadata(userId, {
    privateMetadata: {
      credits: credits,
    },
  });
}

export async function getUserCredits(userId: string): Promise<UserCredits> {
  var user = await clerkClient.users.getUser(userId);
  var credits: UserCredits;
  if (!user.privateMetadata.credits) {
    credits = generateInitialUserCredits();
    await clerkClient.users.updateUserMetadata(userId, {
      privateMetadata: {
        credits: credits,
      },
    });
  } else {
    credits = user.privateMetadata.credits as UserCredits;
  }

  return credits;
}

function consumeCredits(credits: UserCredits, count: number) {
  if (!checkCredits(credits, count)) {
    throw new Error("余额不足，请充值");
  }
  // 先扣免费
  if (credits.free.left >= count) {
    credits.free.left -= count;
    credits.free.used += count;
  } else {
    const minus = count - credits.free.left;
    credits.free.left = 0;
    credits.free.used += credits.free.left;
    credits.purchased!.left -= minus;
    credits.purchased!.used += minus;
  }
}

function checkCredits(credits: UserCredits, count: number): boolean {
  if (credits.free.left >= count) {
    return true;
  }
  if (!credits.purchased) {
    return false;
  }
  const minus = count - credits.free.left;
  return credits.purchased.left >= minus;
}

function generateInitialUserCredits(): UserCredits {
  const initialUserCredits: UserCredits = {
    free: {
      total: 100,
      used: 0,
      left: 100,
    },
  };
  return initialUserCredits;
}

