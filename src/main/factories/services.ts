import { InsertCompaniesService } from '../../application/services/insert-companies-service'
import { InsertCnaesService } from '../../application/services/insert-cnaes-service'
import { DownloadAndUncompressFilesService } from '../../application/services/download-and-uncompress-files-service'
import { gateways } from './gateways'
import { daos } from './daos'

const insertCnaesService = new InsertCnaesService(
  gateways.localFilesGateway,
  gateways.localFilesGateway,
  daos.cnaesDAO
)

const insertCompaniesService = new InsertCompaniesService(
  gateways.localFilesGateway,
  gateways.localFilesGateway,
  daos.companiesDAO
)

const downloadAndUncompressFilesService = new DownloadAndUncompressFilesService(
  gateways.remoteFilesGateway,
  gateways.remoteFilesGateway,
  gateways.decompressionGateway
)

export const services = {
  insertCompaniesService,
  downloadAndUncompressFilesService,
  insertCnaesService
}
