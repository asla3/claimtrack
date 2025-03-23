/*
  Warnings:

  - The values [APPROVED] on the enum `StageCategory` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "StageCategory_new" AS ENUM ('PENDING', 'IN_PROGRESS', 'DENIED', 'COMPLETED');
ALTER TABLE "FinancialClaimStatus" ALTER COLUMN "stageCategory" TYPE "StageCategory_new" USING ("stageCategory"::text::"StageCategory_new");
ALTER TYPE "StageCategory" RENAME TO "StageCategory_old";
ALTER TYPE "StageCategory_new" RENAME TO "StageCategory";
DROP TYPE "StageCategory_old";
COMMIT;
