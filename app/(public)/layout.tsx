import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MantineProvider } from "@mantine/core";
import { FC } from "react";
import Header from "../../components/organisms/header/header";


interface RootLayoutProps extends Readonly<{
  children: React.ReactNode
}> {}

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Generated by create next app",
};

const RootLayout: FC<RootLayoutProps> = ({children}) => {
  return (
    <html lang="en" className="light">
      <body className={inter.className}>
        <MantineProvider defaultColorScheme="light">
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}

export default RootLayout
