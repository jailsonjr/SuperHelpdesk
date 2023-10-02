import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema
    .createTable('users', function (table) {
        table.uuid('user_id').defaultTo(knex.fn.uuid());
        table.string('user_name', 255).notNullable();
        table.string('user_email', 255).unique().notNullable();
        table.string('user_department', 150).notNullable();
        table.string('user_position', 100);
        table.string('user_filial', 100);
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema
    .dropTable("users");
}
