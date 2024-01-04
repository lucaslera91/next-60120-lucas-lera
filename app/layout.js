import { Inter } from "next/font/google";
import "./globals.css";
import { ProductListAdminProvider } from "@/Contexts/ProductListAdminProvider";
import AuthProvider from "@/Contexts/AuthProvider";
import Loading from "./Loading";
import { Suspense } from "react";
import ProtectedRoute from "@/Components/ProtectedRoute/ProtectedRoute";
import { CartProvider } from "@/Contexts/CartProvider";
import { OrdersProvider } from "@/Contexts/OrdersProvider";
import { AdminProvider } from "@/Contexts/AdminProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LibraryApp",
  description: "App de libreria",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={<Loading />}>
          <AuthProvider>
            <OrdersProvider>
              <CartProvider>
                <AdminProvider>
                  <ProductListAdminProvider>
                    {/* <ProtectedRoute /> */}
                    {children}
                  </ProductListAdminProvider>
                </AdminProvider>
              </CartProvider>
            </OrdersProvider>
          </AuthProvider>
        </Suspense>
      </body>
    </html>
  );
}
