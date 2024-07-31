import { ListRemoteFilesGateway } from '../../application/protocols/gateways/list-remote-files-gateway'
import { DownloadRemoteFileGateway, DownloadRemoteFileGatewayParams } from '../../application/protocols/gateways/download-remote-file-gateway'
import { RemoteFile } from '../../core/entities/remote-file'
import fs from 'fs'
import path from 'path'
import unzipper from 'unzipper'
import { Readable } from 'stream'
import { pipeline } from 'stream/promises'
import { JSDOM } from 'jsdom'


export class RemoteFilesGateway implements ListRemoteFilesGateway, DownloadRemoteFileGateway {
  async listRemoteFiles(): Promise<RemoteFile[]> {
    const BASE_URL = 'http://200.152.38.155/CNPJ/'
    const result = await fetch(BASE_URL)
    const { document } = new JSDOM(await result.text()).window
    const trs = document.querySelectorAll('tr')

    const files = []

    for (const tr of trs) {
      const tds = Array.from(tr.querySelectorAll('td'))
      const [, file, lastModified] = tds

      if (!file || !lastModified) continue

      const name = file.textContent!.trim()

      const link = file.querySelector('a')
      const downloadUrl = `${BASE_URL}${link!.getAttribute('href')}`
      const lastModifiedDate = new Date(lastModified.textContent!.trim())
      const remoteFile = new RemoteFile(name, downloadUrl, lastModifiedDate)

      files.push(remoteFile)
    }

    return files
  }

  async downloadRemoteFile (params: DownloadRemoteFileGatewayParams): Promise<void> {
    const { remoteFile } = params
    const { body } = await fetch(remoteFile.url)

    if (body === null) throw new Error(`Erro ao baixar o arquivo ${remoteFile.name}`)

    const downloadPath = [__dirname, '..', '..', '..', 'downloads']
    const tmpFilePath = path.resolve(...downloadPath, 'tmp', remoteFile.name)

    console.log(`Downloading ${remoteFile.name}`)

    await pipeline(
      Readable.fromWeb(body as any),
      fs.createWriteStream(tmpFilePath)
    )

    console.log(`Extracting ${remoteFile.name}`)

    const extractPath = path.resolve(...downloadPath)

    await pipeline(
      fs.createReadStream(tmpFilePath),
      unzipper.Extract({ path: extractPath })
    )

    await fs.promises.unlink(tmpFilePath)
  }
}
