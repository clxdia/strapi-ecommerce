import Image from "next/image";
import "../styles/globals.css";
import Footer from "../ui/Footer";
import HeaderComponent from "../ui/HeaderComponent";
import NavMB from "../ui/NavMB";
import { Providers } from "./provider";
import { CartProvider } from "./CartContext";
import { notDeepEqual } from "assert";

export const metadata = {
  title: "E-Commerce | Home",
  description:
    "Scopri la moda di tendenza nel nostro negozio online di abbigliamento. Ampia selezione di capi per uomo, donna e bambino. Qualità e stile impeccabili. Acquisto sicuro e navigazione intuitiva. Sfoglia ora!",
  languages: {
    "it-IT": "/it-IT",
    "en-US": "/en-US",
  },
  icons: {
    icon: "/ec.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <CartProvider>
          <Providers>
            <HeaderComponent />
            <NavMB />
            <main className="md:pt-0 pt-[5rem] max-w-[2000px] m-auto">
              {children}
            </main>
            <Footer />
          </Providers>
        </CartProvider>
      </body>
    </html>
  );
}
