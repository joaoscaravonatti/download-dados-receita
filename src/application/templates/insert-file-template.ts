import { ListLocalFilesGateway } from '../protocols/gateways/list-local-files-gateway'
import { ReadLocalFileGateway } from '../protocols/gateways/read-local-file-gateway'

export abstract class InsertFileTemplate {
  constructor (
    private readonly fileNamePattern: string,
    private readonly listLocalFilesGateway: ListLocalFilesGateway,
    private readonly readLocalFileGateway: ReadLocalFileGateway
  ) {}

  abstract insert (item: string[]): Promise<void>

  async run (): Promise<void> {
    const localFiles = await this.listLocalFilesGateway.listLocalFiles()

    for (const localFile of localFiles) {
      if (!localFile.name.includes(this.fileNamePattern)) continue

      const result = this.readLocalFileGateway.readLocalFile({ localFile })

      for await (const item of result) {
        await this.insert(item)
      }
    }
  }
}
