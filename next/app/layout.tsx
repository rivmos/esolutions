import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import SessionProvider from "@/app/components/SessionProvider"
import { getServerSession } from "next-auth";
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "esolutions",
  description: "Esolution For The Future",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await getServerSession()

  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader />
        <SessionProvider session={session}>
          {children}
        </SessionProvider> 
        <Toaster />
      </body>
    </html>
  );
}
