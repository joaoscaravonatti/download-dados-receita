import { RemoteFile } from '../../core/entities/remote-file';
import { ListRemoteFiles } from '../../core/usecases/list-remote-files'
import { ListRemoteFilesGateway } from '../protocols/gateways/list-remote-files-gateway'

export class ListRemoteFilesService implements ListRemoteFiles {
  constructor (private readonly listRemoteFilesReListRemoteFilesGateway: ListRemoteFilesGateway) {}

  async run(): Promise<RemoteFile[]> {
    return await this.listRemoteFilesReListRemoteFilesGateway.listRemoteFiles()
  }
}
