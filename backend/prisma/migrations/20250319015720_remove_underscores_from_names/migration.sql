/*
  Warnings:

  - You are about to drop the column `deleted_at` on the `Department` table. All the data in the column will be lost.
  - You are about to drop the column `submission_date` on the `FinancialClaim` table. All the data in the column will be lost.
  - You are about to drop the column `reimbursement_rate` on the `ServiceType` table. All the data in the column will be lost.
  - You are about to drop the column `avatar_url` on the `User` table. All the data in the column will be lost.
  - Added the required column `submissionDate` to the `FinancialClaim` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reimbursementRate` to the `ServiceType` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Department" DROP COLUMN "deleted_at",
ADD COLUMN     "deletedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "FinancialClaim" DROP COLUMN "submission_date",
ADD COLUMN     "submissionDate" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "ServiceType" DROP COLUMN "reimbursement_rate",
ADD COLUMN     "reimbursementRate" DECIMAL(65,30) NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "avatar_url",
ADD COLUMN     "avatarUrl" TEXT;
