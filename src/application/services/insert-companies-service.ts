import { InsertCompanies } from '../../core/usecases/insert-companies'
import { ListLocalFilesGateway } from '../protocols/gateways/list-local-files-gateway'
import { ReadLocalFileGateway } from '../protocols/gateways/read-local-file-gateway'
import { InsertCompanyDAO } from '../protocols/daos/insert-company-dao'
import { InsertFileTemplate } from '../templates/insert-file-template'

export class InsertCompaniesService extends InsertFileTemplate implements InsertCompanies {
  constructor (
    listLocalFilesGateway: ListLocalFilesGateway,
    readLocalFileGateway: ReadLocalFileGateway,
    private readonly insertCompanyDAO: InsertCompanyDAO
  ) {
    super('EMPRECSV', listLocalFilesGateway, readLocalFileGateway)
  }

  async insert (item: string[]): Promise<void> {
    const [
      cnpjBasico,
      razaoSocial,
      naturezaJuridica,
      qualificacaoResponsavel,
      capitalSocial,
      porte,
      enteFederativo
    ] = item

    await this.insertCompanyDAO.insert({
      cnpjBasico,
      razaoSocial,
      naturezaJuridica,
      qualificacaoResponsavel,
      capitalSocial,
      porte,
      enteFederativo
    })
  }
}
