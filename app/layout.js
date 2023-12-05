import { Inter } from "next/font/google";
import "./globals.css";
import { ProductListAdminProvider } from "@/Contexts/ProductListAdminProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LibraryApp",
  description: "App de libreria",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProductListAdminProvider>{children}</ProductListAdminProvider>
      </body>
    </html>
  );
}
