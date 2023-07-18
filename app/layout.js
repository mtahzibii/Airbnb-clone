import { Nunito } from "next/font/google";
const font = Nunito({ subsets: ["latin"] });
import Navbar from "./components/navbar/Navbar";
import RegisterModal from "./components/modals/RegisterModal";
import LoginModal from "./components/modals/LoginModal";
import ToasterProvider from "./ToasterProvider";
import getCurrentUser from "./actions/getCurrentUser";
import ClientOnly from "./components/ClientOnly";
import Provider from "./components/Provider";

import "./globals.css";

export const metadata = {
  title: "Airbnb",
  description: "A clone of Airbnb using Next.js and MongoDB",
};

export default async function RootLayout({ children }) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <Provider>
          <ClientOnly>
            <ToasterProvider />
            <Navbar currentUser={currentUser} />
            <LoginModal />
            <RegisterModal />
          </ClientOnly>
          <div className="mt-6">{children}</div>
        </Provider>
      </body>
    </html>
  );
}
