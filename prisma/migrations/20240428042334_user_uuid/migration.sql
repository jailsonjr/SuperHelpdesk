/*
  Warnings:

  - The `user_id` column on the `devices` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "devices" DROP COLUMN "user_id",
ADD COLUMN     "user_id" UUID;
