import { createContext, useContext } from 'react';

interface ThemeContextProps {
  themeMode: 'light' | 'dark';
  toggleThemeMode: () => void;
}
export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a Providers');
  }
  return context;
};