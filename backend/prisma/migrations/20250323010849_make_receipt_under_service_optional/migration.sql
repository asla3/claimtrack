-- DropForeignKey
ALTER TABLE "Service" DROP CONSTRAINT "Service_receiptId_fkey";

-- AlterTable
ALTER TABLE "Service" ALTER COLUMN "receiptId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_receiptId_fkey" FOREIGN KEY ("receiptId") REFERENCES "Receipt"("id") ON DELETE SET NULL ON UPDATE CASCADE;
