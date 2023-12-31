import { Inter } from "next/font/google";
import "./globals.css";
import { ProductListAdminProvider } from "@/Contexts/ProductListAdminProvider";
import AuthProvider from "@/Contexts/AuthProvider";
import Loading from "./Loading";
import { Suspense } from "react";
import ProtectedRoute from "@/Components/ProtectedRoute/ProtectedRoute";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LibraryApp",
  description: "App de libreria",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <ProductListAdminProvider>
            <Suspense fallback={<Loading />}>
              {/* <ProtectedRoute /> */}
              {children}
            </Suspense>
          </ProductListAdminProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
