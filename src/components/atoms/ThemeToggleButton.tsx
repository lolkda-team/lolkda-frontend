import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import styled from '@emotion/styled';

import { useThemeContext } from '@/contexts/useThemeContext';

export const ThemeToggleButton = () => {
  const { themeMode, toggleThemeMode } = useThemeContext();

  return (
    <S.Stack onClick={toggleThemeMode}>
      {themeMode === 'light' ? <DarkModeIcon style={{color: '#FFD700', fontSize: '36px'}} /> : <LightModeIcon style={{color: '#FFD700', fontSize: '36px'}} /> }
    </S.Stack>
  )
};

const S = {
  Stack: styled.span`
    cursor: pointer;
    padding: 5px;
  `,
};