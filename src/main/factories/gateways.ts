import { LocalFilesGateway } from '../../infra/gateways/local-files-gateway'
import { RemoteFilesGateway } from '../../infra/gateways/remote-files-gateway'

export const gateways = {
  localFilesGateway: new LocalFilesGateway(),
  remoteFilesGateway: new RemoteFilesGateway()
}
