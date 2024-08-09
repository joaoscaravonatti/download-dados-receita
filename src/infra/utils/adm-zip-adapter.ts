import { Decompressor, DecompressorParams } from '../protocols/decompressor'
import AdmZip from 'adm-zip'

export class AdmZipAdapter implements Decompressor {
  async decompress (params: DecompressorParams): Promise<void> {
    const { destPath, filePath } = params
    const zip = new AdmZip(filePath)
    zip.extractAllTo(destPath)
  }
}
