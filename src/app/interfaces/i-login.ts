export interface ILogin {
  userID: string;
  password: string;
}

export interface ILoginWrapper{
  data: ILogin
}
