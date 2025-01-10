export interface User {
  name?: string,
  email?: string,
  accessionDate?: Date,
  identityNumber?: string
}

export class CUser implements User {
  constructor(
    public name?: string,
    public email?: string,
    public accessionDate?: Date,
    public identityNumber?: string
  ){}
}
