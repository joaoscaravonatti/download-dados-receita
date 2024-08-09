export type DecompressorParams = {
  filePath: string
  destPath: string
}

export interface Decompressor {
  decompress (params: DecompressorParams): Promise<void>
}
