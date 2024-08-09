import { UnzipperAdapter } from '../../infra/utils/unzipper-adapter'
import { AdmZipAdapter } from '../../infra/utils/adm-zip-adapter'

const unzipperAdapter = new UnzipperAdapter()
const admZipAdapter = new AdmZipAdapter()

export const adapters = {
  unzipperAdapter,
  admZipAdapter
}
