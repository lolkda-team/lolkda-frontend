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
          <Container maxWidth="lg">
              {children}
          </Container>
        </Providers>
      </body>
    </html>
  );
}
