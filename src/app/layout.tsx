import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import GlobalStyleProvider from "../../providers/GlobalStyleProvider";

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
    <html lang="en">
      <body className={inter.className}>
        <GlobalStyleProvider>
          <Sidebar/>
          {children}
        </GlobalStyleProvider>
      </body>
    </html>
  );
}
