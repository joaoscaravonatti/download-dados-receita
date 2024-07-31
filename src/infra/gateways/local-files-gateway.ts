import { ListLocalFilesGateway } from '../../application/protocols/gateways/list-local-files-gateway'
import { ReadLocalFileGateway, ReadLocalFileGatewayParams } from '../../application/protocols/gateways/read-local-file-gateway'
import { LocalFile } from '../../core/entities/local-file'
import fs from 'fs'
import path from 'path'

export class LocalFilesGateway implements ListLocalFilesGateway, ReadLocalFileGateway {
  async listLocalFiles (): Promise<LocalFile[]> {
    const basePath = path.resolve(__dirname, '..', '..', '..', 'downloads')
    const dir = await fs.promises.readdir(basePath)
    const files: LocalFile[] = []

    for (const item of dir) {
      const filePath = path.resolve(basePath, item)
      const status = await fs.promises.lstat(filePath)

      if (status.isFile()) files.push(new LocalFile(item, filePath))
    }

    return files
  }

  async *readLocalFile (params: ReadLocalFileGatewayParams): AsyncGenerator<string[]> {
    const { localFile } = params
    const fileStream = fs.createReadStream(localFile.path, { encoding: 'utf-8' })
    let incomplete = ''
    let itemDataCount = 0

    for await (const item of fileStream) {
      const rows = incomplete.concat(item).split('\n')
      incomplete = ''
      
      for (const row of rows) {
        const data = row.split(';')
        itemDataCount = itemDataCount === 0 ? data.length : itemDataCount

        if (data.length !== itemDataCount) {
          incomplete = row

          continue
        }

        yield data.map((item) => item.replaceAll('"', ''))
      }
    }
  }
}
