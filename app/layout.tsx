// layout.tsx: 전체 틀 잡아주는역할
import type { Metadata } from "next";
import { Inter } from "next/font/google";
//import "./globals.css";
import Header from "../components/Header";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <div>
          <Header />
          <div className="lg:pl-64">{children}</div>
        </div>
      </body>
    </html>
  );
}
