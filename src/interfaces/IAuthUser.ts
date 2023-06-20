import { IUser } from "./IUser";

export interface IAuthUser {
  user?: IUser | null;
  authToken?: string | null;
}