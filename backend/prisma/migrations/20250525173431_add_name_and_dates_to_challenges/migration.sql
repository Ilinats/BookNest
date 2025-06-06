/*
  Warnings:

  - You are about to drop the column `year` on the `ReadingChallenge` table. All the data in the column will be lost.
  - Added the required column `endDate` to the `ReadingChallenge` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `ReadingChallenge` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startDate` to the `ReadingChallenge` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ReadingChallenge" DROP COLUMN "year",
ADD COLUMN     "endDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "startDate" TIMESTAMP(3) NOT NULL;
