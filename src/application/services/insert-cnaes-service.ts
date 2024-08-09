import { InsertCnaes } from '../../core/usecases/insert-cnaes'
import { ListLocalFilesGateway } from '../protocols/gateways/list-local-files-gateway'
import { ReadLocalFileGateway } from '../protocols/gateways/read-local-file-gateway'
import { InsertCnaeDAO } from '../protocols/daos/insert-cnae-dao'
import { InsertFileTemplate } from '../templates/insert-file-template'

export class InsertCnaesService extends InsertFileTemplate implements InsertCnaes {
  constructor (
    listLocalFilesGateway: ListLocalFilesGateway,
    readLocalFileGateway: ReadLocalFileGateway,
    private readonly insertCnaeDAO: InsertCnaeDAO
  ) {
    super('CNAECSV', listLocalFilesGateway, readLocalFileGateway)
  }

  protected async insert (item: string[]): Promise<void> {
    const [codigo, descricao] = item
    await this.insertCnaeDAO.insert({ codigo, descricao })
  }
}
