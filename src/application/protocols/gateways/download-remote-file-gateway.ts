import { RemoteFile } from '../../../core/entities/remote-file'

export type DownloadRemoteFileGatewayParams = {
  remoteFile: RemoteFile
}

export interface DownloadRemoteFileGateway {
  downloadRemoteFile (params: DownloadRemoteFileGatewayParams): Promise<void>
}
