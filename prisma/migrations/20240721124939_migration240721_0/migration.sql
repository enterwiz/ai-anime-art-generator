-- CreateEnum
CREATE TYPE "PictureStatus" AS ENUM ('UNKNOWN', 'GENERATING', 'ONLINE', 'DELETED');

-- CreateTable
CREATE TABLE "Picture" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "userId" VARCHAR(255) NOT NULL,
    "prompt" VARCHAR(8192) NOT NULL,
    "tags" TEXT[],
    "url" VARCHAR(4096) NOT NULL,
    "status" "PictureStatus" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Picture_pkey" PRIMARY KEY ("id")
);
