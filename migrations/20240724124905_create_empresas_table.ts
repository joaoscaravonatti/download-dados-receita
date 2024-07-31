import type { Knex } from 'knex'


export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable('empresas', (table) => {
      table.string('cnpj_basico').primary()
      table.string('razao_social')
      table.string('natureza_juridica')
      table.string('capital_social')
      table.string('qualificacao_responsavel')
      table.string('porte')
      table.string('ente_federativo')
      table.timestamps()
    })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('empresas')
}
