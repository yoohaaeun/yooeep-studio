import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';
import { adminUser, IUser, login, logout } from '../api/firebase';

export interface AuthContextType {
  user: IUser | null;
  uid: string | null;
  login: () => void;
  logout: () => void;
  loading: boolean;
}

interface AuthStateType {
  user: IUser | null;
  loading: boolean;
}

interface AuthContextProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [authState, setAuthState] = useState<AuthStateType>({
    user: null,
    loading: true,
  });

  const user = authState.user;
  const loading = authState.loading;

  useEffect(() => {
    const stopListen = onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        adminUser(user).then((user) => setAuthState({ user, loading: false }));
      } else {
        setAuthState({ user: null, loading: false });
      }
    });

    return () => stopListen();
  }, [adminUser, getAuth]);

  return (
    <AuthContext.Provider
      value={{ user, uid: user && user.uid, login, logout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
