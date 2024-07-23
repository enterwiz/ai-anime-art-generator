/*
  Warnings:

  - Added the required column `params` to the `Picture` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Picture" ADD COLUMN     "params" JSONB NOT NULL;
