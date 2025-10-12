/*
  Warnings:

  - You are about to drop the column `identificator` on the `News` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[identifier]` on the table `News` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `identifier` to the `News` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "public"."News_identificator_key";

-- AlterTable
ALTER TABLE "News" DROP COLUMN "identificator",
ADD COLUMN     "identifier" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "News_identifier_key" ON "News"("identifier");
