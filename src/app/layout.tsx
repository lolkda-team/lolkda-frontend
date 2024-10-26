import type { Metadata } from "next";
import "@/styles/globals.css";
import React from "react";
import {Container} from "@mui/material";

export const metadata: Metadata = {
  title: "LOLKDA",
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
        <Container maxWidth="lg">
            {children}
        </Container>
      </body>
    </html>
  );
}
