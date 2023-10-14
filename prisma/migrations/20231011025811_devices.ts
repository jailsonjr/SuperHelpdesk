import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema
    .createTable('devices', function (table) {
        table.uuid('device_id').unique().notNullable();
        table.string('device_type', 255).notNullable();
        table.string('device_sn', 255).unique().notNullable();
        table.string('device_status', 150).notNullable();
        table.string('device_brand', 100);
        table.string('device_filial', 100);
        table.string('device_user', 100);
        table.string('device_date_delivered', 100);
        table.string('device_contract_company', 100);
        table.string('device_contract_id', 100);
        table.string('device_contract_amount', 100);
        table.string('device_contract_loan', 100);
        table.string('device_contract_date_end', 100);
        table.string('device_ip', 100);
        table.string('device_mac_wifi', 100);
        table.string('device_mac_ethernet', 100);
        table.string('device_obs', 255);
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema
    .dropTable("devices");
}

