import { Nunito } from "next/font/google";
const font = Nunito({ subsets: ["latin"] });
import Navbar from "./components/navbar/Navbar";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./ToasterProvider";

import "./globals.css";

export const metadata = {
  title: "Airbnb",
  description: "A clone of Airbnb using Next.js and MongoDB",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <Navbar />
        <RegisterModal />
        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}
