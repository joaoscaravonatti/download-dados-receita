import { knex } from '../utils/knex'
import { InsertCnaeDAO, InsertCnaeDAOParams } from '../../application/protocols/daos/insert-cnae-dao'

export class CnaesDAO implements InsertCnaeDAO {
  async insert (params: InsertCnaeDAOParams): Promise<void> {
    const { codigo, descricao } = params

    await knex('cnaes').insert({
      codigo,
      descricao,
      created_at: new Date(),
      updated_at: new Date()
    })
  }
}
