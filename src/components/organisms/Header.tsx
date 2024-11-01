'use client';

import { usePathname } from 'next/navigation';
import { Logo } from '@/components/atoms/Logo';
import styled from '@emotion/styled';
import { ThemeToggleButton } from '@/components/atoms/ThemeToggleButton';
import { SiteToggleButton } from '@/components/atoms/SiteToggleButton';
import { LanguageButton } from '@/components/atoms/LanguageButton';
import { useTheme } from '@mui/material/styles';
import { PaletteType } from '@/types/paletteType';

export const Header = () => {
  const path = usePathname();
  const theme = useTheme();

  return(
    <S.Wrapper theme={theme.palette}>
      <S.Stack>
        <Logo fontSize={'30px'} spacing={'1px'} />
        <SiteToggleButton path={path} />
      </S.Stack>
      <S.Stack>
        <ThemeToggleButton />
        <LanguageButton />
      </S.Stack>
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div<{ theme: PaletteType }>`
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px 50px;
      background-color: ${({ theme }) => theme.background.paper};
      box-shadow: 0 7px 10px #00000014;
  `,
  Stack: styled.div`
    display: flex;
    align-items: center;
  `
};
