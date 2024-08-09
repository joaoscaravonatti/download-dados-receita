import { DownloadAndUncompressFiles } from '../../core/usecases/download-and-uncompress-files'
import { ListRemoteFilesGateway } from '../protocols/gateways/list-remote-files-gateway'
import { DownloadRemoteFileGateway } from '../protocols/gateways/download-remote-file-gateway'
import { DecompressFilesGateway } from '../protocols/gateways/decompress-files-gateway'

export class DownloadAndUncompressFilesService implements DownloadAndUncompressFiles {
  constructor (
    private readonly listRemoteFiles: ListRemoteFilesGateway,
    private readonly downloadRemoteFileGateway: DownloadRemoteFileGateway,
    private readonly decompressFilesGateway: DecompressFilesGateway
  ) {}

  async run(): Promise<void> {
    const remoteFiles = await this.listRemoteFiles.listRemoteFiles()
    const zipFiles = remoteFiles.filter((file) => file.name.endsWith('Cnaes.zip'))
    const destPath = [__dirname, '..', '..', '..', 'downloads']
    const tmpPath = [...destPath, 'tmp']

    for (const remoteFile of zipFiles) {
      await this.downloadRemoteFileGateway.downloadRemoteFile({
        remoteFile,
        downloadPath: tmpPath
      })
    }

    await this.decompressFilesGateway.decompress({
      sourcePath: tmpPath,
      destPath
    })
  }
}
