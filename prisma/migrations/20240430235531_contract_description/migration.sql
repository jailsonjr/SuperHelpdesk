/*
  Warnings:

  - You are about to drop the column `supplier_id` on the `contracts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "contracts" DROP COLUMN "supplier_id",
ADD COLUMN     "supplier_description" VARCHAR(255);
