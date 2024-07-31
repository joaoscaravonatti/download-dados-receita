import Knex from 'knex'

export const knex = Knex({
  client: 'pg',
  connection: {
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
    host: process.env.PG_HOST
  }
})
