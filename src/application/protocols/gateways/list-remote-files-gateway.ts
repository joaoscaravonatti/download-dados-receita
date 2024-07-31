import { RemoteFile } from '../../../core/entities/remote-file'

export interface ListRemoteFilesGateway {
  listRemoteFiles (): Promise<RemoteFile[]>
}
