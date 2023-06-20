import { IAuthUser } from '../interfaces/IAuthUser';
import { Dispatch, SetStateAction } from 'react'
export interface IAuthContext {
  user: IAuthUser | null;
  // setUser: Dispatch<SetStateAction<IAuthUser | null>>;
  setUser: (user: IAuthUser | null) => void;
}
