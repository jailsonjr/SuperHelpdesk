-- CreateTable
CREATE TABLE "users" (
    "user_id" UUID DEFAULT gen_random_uuid(),
    "user_name" VARCHAR(255) NOT NULL,
    "user_email" VARCHAR(255) NOT NULL,
    "user_department" VARCHAR(150) NOT NULL,
    "user_position" VARCHAR(100),
    "user_filial" VARCHAR(100),
    "user_active" VARCHAR(10) DEFAULT 'active'
);

-- CreateIndex
CREATE UNIQUE INDEX "users_user_email_unique" ON "users"("user_email");
