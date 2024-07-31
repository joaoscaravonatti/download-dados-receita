import { LocalFile } from '../../../core/entities/local-file'

export interface ListLocalFilesGateway {
  listLocalFiles (): Promise<LocalFile[]>
}
