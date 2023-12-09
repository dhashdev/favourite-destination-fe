// AuthContext.tsx
import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from 'react';
import { AuthContextType } from '../types/AuthContext';

// Creating the AuthContext
const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode; // Use ReactNode for the children prop
}

// AuthProvider Component
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [userName, setUserName] = useState<string | null>(null);

  // Effect to initialize user data from local storage
  useEffect(() => {
    const storedName = localStorage.getItem('userName');
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  // User login handler
  const login = (newUserName: string) => {
    setUserName(newUserName);
    localStorage.setItem('userName', newUserName);
  };

  // User logout handler
  const logout = () => {
    setUserName(null);
    localStorage.removeItem('userName');
  };

  // Context value containing user information and login/logout functions
  const contextValue: AuthContextType = {
    userName,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

// useAuth Hook
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
