import type { Metadata } from "next";
import "@/styles/globals.css";
import React from "react";
import {Container} from "@mui/material";
import { Providers } from '@/app/provider';
import { Header } from '@/components/organisms/Header';

export const metadata: Metadata = {
  title: "LOLKDA | 롤 전적 검색",
  description: "롤 전적 검색",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Providers>
          <Header />
          {/*<div style={{background: 'black', margin: '0 auto', textAlign: 'center'}}>*/}
          {/*  <img*/}
          {/*    style={{width: '970px'}}*/}
          {/*    src={'https://s-opgg-kit.op.gg/gnb/config/images/ads/d72ae362889514d4acb7c883c68fb090.png?image=q_auto:good,f_webp,w_1940,h_180'}*/}
          {/*    alt={'ad-img'} />*/}
          {/*</div>*/}
          <Container maxWidth="lg">
            {children}
          </Container>
        </Providers>
      </body>
    </html>
  );
}
