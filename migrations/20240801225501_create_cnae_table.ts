import type { Knex } from 'knex'


export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable('cnaes', (table) => {
      table.string('codigo').primary()
      table.string('descricao')
      table.timestamps()
    })
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('cnaes')
}

