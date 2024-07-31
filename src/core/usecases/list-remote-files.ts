import { RemoteFile } from '../entities/remote-file'

export interface ListRemoteFiles {
  run (): Promise<RemoteFile[]>
}
