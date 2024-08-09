import { DecompressFilesGateway, DecompressFilesGatewayParams } from '../../application/protocols/gateways/decompress-files-gateway'
import { Decompressor } from '../protocols/decompressor'
import path from 'path'
import fs from 'fs'

export class DecompressionGateway implements DecompressFilesGateway {
  constructor (private readonly decompressor: Decompressor) {}

  async decompress(params: DecompressFilesGatewayParams): Promise<void> {
    const { sourcePath, destPath } = params
    const dir = await fs.promises.readdir(path.resolve(...sourcePath))

    for (const file of dir) {
      if (!file.includes('.zip')) continue

      const filePath = path.resolve(...sourcePath, file)

      await this.decompressor.decompress({
        filePath,
        destPath: path.resolve(...destPath)
      })

      await fs.promises.unlink(filePath)
    }
  }
}
