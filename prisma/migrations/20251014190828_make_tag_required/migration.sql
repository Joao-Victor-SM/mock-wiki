/*
  Warnings:

  - Made the column `tagId` on table `News` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "public"."News" DROP CONSTRAINT "News_tagId_fkey";

-- AlterTable
ALTER TABLE "News" ALTER COLUMN "tagId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "News" ADD CONSTRAINT "News_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
