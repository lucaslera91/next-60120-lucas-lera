import { getProductsListApi } from "@/service/productService";
import { Suspense } from "react";
import ProductList from "../Components/ProductList/ProductList";
import Footer from "../Components/ui/Footer/Footer";
import Header from "../Components/ui/Header/Header";
import Loading from "./Loading";
import { footerList } from "./utils/footerUtlis";
import { headerData } from "./utils/headerUtils";

export const metadata = {
  title: "LibraryApp - Inicio",
  description: "App de libreria",
};

export default async function Home() {
  //const isLogedIn = () => await authCheck;
  const productList = await getProductsListApi()
    .catch((error) => console.log(error));

  return (
    <main className="space-y-4 rounded p-2">
      <Header data={headerData} />
      <div className="p-2">
        <h2 className="text-3xl pb-4">Que producto te gusta?!</h2>
        <Suspense fallback={<Loading />}>
          <ProductList productList={productList} />
        </Suspense>
        <Footer data={footerList} />
      </div>
    </main>
  );
}
