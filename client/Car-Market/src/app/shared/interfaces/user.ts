export interface IUser {
  _id: string;
  accessToken: string;
  email: string;
  username: string;
  error?: {
    message: string;
  };
}
