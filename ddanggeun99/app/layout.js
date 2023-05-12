import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Tabbar from "./components/tabbar/Tabbar";

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
      <body className={`${font.className} `}>
        <div className="flex flex-col max-w-screen-md mx-auto h-full border-x-[2px]">
          <Navbar />
          {children}
          <Tabbar />
        </div>
      </body>
    </html>
  );
}
