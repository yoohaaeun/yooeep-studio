import { createContext, useContext, useEffect, useState } from 'react';
import { IUser, login, logout, onUserStateChange } from '../../api/firebase';

export interface AuthContextType {
  user: IUser | null;
  login: () => void;
  logout: () => void;
}

interface AuthContextProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    onUserStateChange((updatedUser) => {
      setUser(updatedUser);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
