import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { MyContextProvider } from "./Store/Context";

const geo = Lexend({
  subsets: ["latin"],
  weight: ["200", "300", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Amit.dev",
  description: "Software developer with expertise with NextJs, React",
  icons: {
    icon: "/name.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <Head>
          <link rel="icon" href="/name.jpeg" />
        </Head>
        <body
          className={
            geo.className + "bg-white dark:bg-black text-black dark:text-white"
          }
        >
          <MyContextProvider>{children}</MyContextProvider>
        </body>
      </html>
    </>
  );
}
