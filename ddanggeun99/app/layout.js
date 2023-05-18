"use client"

import { Nunito } from "next/font/google";
import Loading from "./components/loading/Loading";
import "./globals.css";
import useLoading from "./hooks/useLoading";

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
    <html lang="en">
      <body className={font.className}>
        <div className="flex flex-col justify-between max-w-screen-md mx-auto h-full">
          {children}

          {isLoading.isLoading && <Loading />}
        </div>
      </body>
    </html>
  );
}
