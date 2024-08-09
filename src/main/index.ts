import { services } from './factories/services'

const main = async () => {
  await services.insertCnaesService.run()
}

main()
