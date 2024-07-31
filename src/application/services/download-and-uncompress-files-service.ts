import { DownloadAndUncompressFiles } from '../../core/usecases/download-and-uncompress-files'
import { ListRemoteFilesGateway } from '../protocols/gateways/list-remote-files-gateway'
import { DownloadRemoteFileGateway } from '../protocols/gateways/download-remote-file-gateway'

export class DownloadAndUncompressFilesService implements DownloadAndUncompressFiles {
  constructor (
    private readonly listRemoteFiles: ListRemoteFilesGateway,
    private readonly downloadRemoteFileGateway: DownloadRemoteFileGateway
  ) {}

  async run(): Promise<void> {
    const remoteFiles = await this.listRemoteFiles.listRemoteFiles()
    const zipFiles = remoteFiles.filter((file) => file.name.endsWith('.zip'))

    for (const remoteFile of zipFiles) {
      await this.downloadRemoteFileGateway.downloadRemoteFile({ remoteFile })
    }
  }
}
