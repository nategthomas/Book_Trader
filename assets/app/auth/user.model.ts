export class User {
  constructor(public email: string,
              public password: string,
              public firstName?: string,
              public lastName?: string,
              public address1?: string,
              public address2?: string,
              public city?: string,
              public state?: string,
              public zip?: string,
              public country?: string

  ) {}
}
