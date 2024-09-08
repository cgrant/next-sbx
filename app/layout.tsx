import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Logo from "@/components/Header/Logo";

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
  const name = "Recipie Browser";
  return (
    <html lang="en">
      <body className={inter.className}>
  
      <Header name={name} />
      <Header name="fred">
        <p>A message for fred</p>
      </Header>
      <Header name="John">
        <Logo name="JohnLogo" />
      </Header>
        <nav>
          <h1>Recipie Browser</h1>
        </nav>
        {children}
      </body>
    </html>
  );
}
