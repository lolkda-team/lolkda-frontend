'use client';

import { Button } from '@mui/material';
import { useThemeContext } from '@/contexts/useThemeContext';

export const ThemeToggleButton = () => {
  const { themeMode, toggleThemeMode } = useThemeContext();

  return (
    <Button onClick={toggleThemeMode} variant="contained" color="primary">
      {themeMode === 'light' ? '다크 모드' : '라이트 모드'}
    </Button>
  )
};