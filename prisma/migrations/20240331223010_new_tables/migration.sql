/*
  Warnings:

  - Added the required column `user_password` to the `users` table without a default value. This is not possible if the table is not empty.
  - Made the column `user_id` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "user_password" VARCHAR(255) NOT NULL,
ALTER COLUMN "user_id" SET NOT NULL;

-- CreateTable
CREATE TABLE "devices" (
    "device_id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "device_type" VARCHAR(255) NOT NULL,
    "device_serial" VARCHAR(150) NOT NULL,
    "device_status" VARCHAR(150) NOT NULL,
    "device_date_delivered" VARCHAR(100),
    "device_obs" VARCHAR(200) DEFAULT 'active',
    "user_id" VARCHAR(255),
    "contract_id" VARCHAR(255),
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "contracts" (
    "contract_id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "contract_description" VARCHAR(255) NOT NULL,
    "contract_status" VARCHAR(150) NOT NULL,
    "contract_date_begin" VARCHAR(150) NOT NULL,
    "contract_end_begin" VARCHAR(100),
    "contract_obs" VARCHAR(150),
    "supplier_id" VARCHAR(255),
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "devices_serial_number_unique" ON "devices"("device_serial");

-- CreateIndex
CREATE UNIQUE INDEX "contracts_contract_id_key" ON "contracts"("contract_id");
