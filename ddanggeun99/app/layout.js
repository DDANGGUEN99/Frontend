import { Nunito } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "DDANGGEUN99",
  description: "DDANGGEUN99",
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${font.className}`}>
        <div className="flex flex-col justify-between border-[2px]  max-w-screen-md mx-auto h-full">
          {children}
        </div>
      </body>
    </html>
  );
}
