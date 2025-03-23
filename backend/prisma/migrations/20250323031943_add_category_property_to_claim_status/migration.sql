/*
  Warnings:

  - Added the required column `stageCategory` to the `FinancialClaimStatus` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "StageCategory" AS ENUM ('PENDING', 'IN_PROGRESS', 'APPROVED', 'DENIED', 'COMPLETED');

-- AlterTable
ALTER TABLE "FinancialClaimStatus" ADD COLUMN     "stageCategory" "StageCategory" NOT NULL;

-- AlterTable
ALTER TABLE "Receipt" ALTER COLUMN "fileUrl" DROP NOT NULL;
