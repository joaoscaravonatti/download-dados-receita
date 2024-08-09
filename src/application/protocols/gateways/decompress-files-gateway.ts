export type DecompressFilesGatewayParams = {
  sourcePath: string[]
  destPath: string[]
}

export interface DecompressFilesGateway {
  decompress (params: DecompressFilesGatewayParams): Promise<void>
}
