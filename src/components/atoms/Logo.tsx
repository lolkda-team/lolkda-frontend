import styled from '@emotion/styled';
import localFont from 'next/font/local';
import Link from 'next/link';

type TProps = {
  fontSize: string;
  spacing: string;
}

const Tenada = localFont({
  src: "../../../public/fonts/Tenada.ttf",
  display: "swap",
  variable: "--font-chab"
});

export const Logo = ({ fontSize, spacing }: TProps) => {
  return(
    <S.Logo
      className={Tenada.className}
      fontSize={fontSize}
      spacing={spacing}
    ><Link href={'/'}>LOLKDA</Link></S.Logo>
  )
}

const S = {
  Logo: styled.h1<{ fontSize: string, spacing: string }>`
    font-size: ${({fontSize}) => fontSize};
    font-weight: bold;
    letter-spacing: ${({spacing}) => spacing};
    cursor: pointer;
    padding-top: 6px;
  `,
};