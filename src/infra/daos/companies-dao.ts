import { knex } from '../utils/knex'
import { InsertCompanyDAO, InsertCompanyDAOParams } from '../../application/protocols/daos/insert-company-dao'

export class CompaniesDAO implements InsertCompanyDAO {
  async insert (params: InsertCompanyDAOParams): Promise<void> {
    const {
      capitalSocial,
      cnpjBasico,
      enteFederativo,
      naturezaJuridica,
      porte,
      razaoSocial
    } = params

    await knex('empresas').insert({
      capital_social: capitalSocial,
      cnpj_basico: cnpjBasico,
      ente_federativo: enteFederativo,
      natureza_juridica: naturezaJuridica,
      razao_social: razaoSocial,
      porte,
      created_at: new Date(),
      updated_at: new Date()
    })
  }
}
