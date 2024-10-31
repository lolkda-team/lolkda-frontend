'use client';

import { ReactNode, useEffect, useMemo, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { darkPalette, lightPalette } from '@/styles/themeColors';
import { ThemeContext } from '@/contexts/useThemeContext';

const queryClient = new QueryClient();

export const Providers = ({ children }: { children: ReactNode }) => {
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeMode,
          ...(themeMode === 'light' ? lightPalette : darkPalette),
        },
      }),
    [themeMode]
  );

  // 테마 모드 토글 함수
  const toggleThemeMode = () => {
    const newMode = themeMode === 'light' ? 'dark' : 'light';
    setThemeMode(newMode);
    localStorage.setItem('lolkda-theme', newMode);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('lolkda-theme') as 'light' | 'dark';
    if (savedTheme) {
      setThemeMode(savedTheme);
    }else{
      localStorage.setItem('lolkda-theme', 'light');
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContext.Provider value={{ themeMode, toggleThemeMode }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </ThemeContext.Provider>
    </QueryClientProvider>
  );
}