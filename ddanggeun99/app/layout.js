"use client";

import { Nunito } from "next/font/google";
import Loading from "./components/loading/Loading";
import "./globals.css";
import useLoading from "./hooks/useLoading";
import { NextSeo } from 'next-seo';

// export const metadata = {
//   title: "DDANGGEUN99",
//   description: "DDANGGEUN99",
// };

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const isLoading = useLoading();
  return (
    <>

      <html lang="en">
      <NextSeo
        title="DDANGGEUN99"
        // 다른 SEO 관련 속성 설정
      />
        <body className={font.className}>
          <div className="flex flex-col justify-between max-w-screen-md mx-auto h-full">
            {children}

            {isLoading.isLoading && <Loading />}
          </div>
        </body>
      </html>
    </>
  );
}
