import { InsertCompaniesService } from '../../application/services/insert-companies-service'
import { DownloadAndUncompressFilesService } from '../../application/services/download-and-uncompress-files-service'
import { gateways } from './gateways'
import { daos } from './daos'

const insertCompaniesService = new InsertCompaniesService(
  gateways.localFilesGateway,
  gateways.localFilesGateway,
  daos.companiesDAO
)

const downloadAndUncompressFilesService = new DownloadAndUncompressFilesService(
  gateways.remoteFilesGateway,
  gateways.remoteFilesGateway
)

export const services = {
  insertCompaniesService,
  downloadAndUncompressFilesService
}
