import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactQueryClientProvider } from "../providers/reactQueryClientProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "An Interface of Ice and Fire",
  description: "Andrés Primera Tech Test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
        <body className={inter.className}>
          <ReactQueryClientProvider>
              {children}
          </ReactQueryClientProvider>
        </body>
      </html>
  );
}
