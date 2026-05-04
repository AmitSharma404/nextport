import type { Metadata } from "next";
import { Aldrich } from "next/font/google";
import "./globals.css";
import { Jura } from "next/font/google";
import Head from "next/head";
import { MyContextProvider } from "./Store/Context";

const jura = Jura({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const aldrich = Aldrich({
  subsets: ["latin"],
  weight: ["400"],
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
          className={`${jura.className} ${aldrich.className} bg-white dark:bg-black text-black dark:text-white`}
        >
          <MyContextProvider>{children}</MyContextProvider>
        </body>
      </html>
    </>
  );
}
