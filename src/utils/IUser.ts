export interface IUser {
  email: string
  avatar?: string
  firstName: string
  lastName: string
  lastOnline?: Date
  state: "ativo" | "inativo" | "suspenso"
  userType: "admin" | "designer" | "default",
}