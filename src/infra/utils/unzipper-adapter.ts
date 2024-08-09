import { Decompressor, DecompressorParams } from '../protocols/decompressor'
import fs from 'fs'
import { finished } from 'stream/promises'
import unzipper from 'unzipper'

export class UnzipperAdapter implements Decompressor {
  async decompress(params: DecompressorParams): Promise<void> {
    const { destPath, filePath } = params
    const dir = await unzipper.Open.file(filePath)

    await finished(
      dir.files[0].stream().pipe(fs.createWriteStream(destPath))
    )
  }
}
