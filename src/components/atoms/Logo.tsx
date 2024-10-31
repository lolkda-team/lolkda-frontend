import styled from '@emotion/styled';
import localFont from 'next/font/local';

const Tenada = localFont({
  src: "../../../public/fonts/Tenada.ttf",
  display: "swap",
  variable: "--font-chab"
});

export const Logo = () => {
  return(
    <S.Logo className={Tenada.className}>LOLKDA</S.Logo>
  )
}

const S = {
  Logo: styled.h1`
    font-size: 36px;
    font-weight: bold;
    cursor: pointer;
  `,
};