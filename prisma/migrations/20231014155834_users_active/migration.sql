/*
  Warnings:

  - Made the column `user_active` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "users" ALTER COLUMN "user_active" SET NOT NULL;
