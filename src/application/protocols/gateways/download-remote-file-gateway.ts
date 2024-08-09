import { RemoteFile } from '../../../core/entities/remote-file'

export type DownloadRemoteFileGatewayParams = {
  remoteFile: RemoteFile
  downloadPath: string[]
}

export interface DownloadRemoteFileGateway {
  downloadRemoteFile (params: DownloadRemoteFileGatewayParams): Promise<void>
}
