import { IAuthUser } from '../interfaces/IAuthUser';

export interface IAuthContext {
  user: IAuthUser | null;
  setUser: (user: IAuthUser | null) => void;
}