import { createContext, ReactNode, useState } from 'react';
import { IAuthContext } from '../interfaces/IAuthContext';
import { IAuthUser } from '../interfaces/IAuthUser';

const AuthContext = createContext<IAuthContext>({
  user: null,
  setUser: () => { },
});

// const AuthProvider: FC<any> = ({ children }: {children: ReactNode}) => {
const AuthProvider = ({ children }: { children: ReactNode }): JSX.Element => {

  const [user, setUser] = useState<IAuthUser | null>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
