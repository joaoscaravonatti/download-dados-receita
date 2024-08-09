import { adapters } from './adapters'
import { LocalFilesGateway } from '../../infra/gateways/local-files-gateway'
import { RemoteFilesGateway } from '../../infra/gateways/remote-files-gateway'
import { DecompressionGateway } from '../../infra/gateways/decompression-gateway'

export const gateways = {
  decompressionGateway: new DecompressionGateway(adapters.admZipAdapter),
  localFilesGateway: new LocalFilesGateway(),
  remoteFilesGateway: new RemoteFilesGateway()
}
