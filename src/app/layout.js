import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/component/Nav";
import Footer from "@/component/Footer";
import Sidebar from "@/component/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MovieDB",
  description: "Made by Next JS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" bg-white font-[Sora]  text-dark">
        <Nav />
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
