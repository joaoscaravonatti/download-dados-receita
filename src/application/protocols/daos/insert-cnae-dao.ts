export type InsertCnaeDAOParams = {
  codigo: string
  descricao: string
}

export interface InsertCnaeDAO {
  insert (params: InsertCnaeDAOParams): Promise<void>
}
