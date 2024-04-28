/*
  Warnings:

  - You are about to alter the column `user_id` on the `devices` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(100)`.
  - The `contract_id` column on the `devices` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[device_id]` on the table `devices` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user_id]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "devices" ALTER COLUMN "user_id" SET DATA TYPE VARCHAR(100),
DROP COLUMN "contract_id",
ADD COLUMN     "contract_id" UUID;

-- CreateIndex
CREATE UNIQUE INDEX "devices_device_id_key" ON "devices"("device_id");

-- CreateIndex
CREATE UNIQUE INDEX "users_user_id_key" ON "users"("user_id");
