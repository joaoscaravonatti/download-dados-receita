import { LocalFile } from '../../../core/entities/local-file'

export type ReadLocalFileGatewayParams = {
  localFile: LocalFile
}

export interface ReadLocalFileGateway {
  readLocalFile (params: ReadLocalFileGatewayParams): AsyncGenerator<string[]>
}
