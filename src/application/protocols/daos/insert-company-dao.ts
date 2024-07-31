export type InsertCompanyDAOParams = {
  cnpjBasico: string
  razaoSocial: string
  naturezaJuridica: string
  capitalSocial: string
  porte: string
  enteFederativo: string
  qualificacaoResponsavel: string
}

export interface InsertCompanyDAO {
  insert (params: InsertCompanyDAOParams): Promise<void>
}
