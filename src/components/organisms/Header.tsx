'use client';

import { usePathname } from 'next/navigation';
import { Logo } from '@/components/atoms/Logo';
import styled from '@emotion/styled';
import { ThemeToggleButton } from '@/components/atoms/ThemeToggleButton';
import { SiteToggleButton } from '@/components/atoms/SiteToggleButton';
import { LanguageButton } from '@/components/atoms/LanguageButton';

export const Header = () => {
  const path = usePathname();

  return(
    <S.Wrapper>
      <S.Stack>
        <Logo />
        <SiteToggleButton path={path} />
      </S.Stack>
      <S.Stack>
        <LanguageButton />
        <ThemeToggleButton />
      </S.Stack>
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 50px;
  `,
  Stack: styled.div`
    display: flex;
    align-items: center;
  `
};
