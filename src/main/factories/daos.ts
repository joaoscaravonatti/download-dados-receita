import { CnaesDAO } from '../../infra/daos/cnaes-dao'
import { CompaniesDAO } from '../../infra/daos/companies-dao'

const companiesDAO = new CompaniesDAO()
const cnaesDAO = new CnaesDAO()

export const daos = {
  companiesDAO,
  cnaesDAO
}
