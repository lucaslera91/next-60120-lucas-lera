import { Suspense } from "react";
import ProductList from "../Components/ProductList/ProductList";
import Footer from "../Components/ui/Footer/Footer";
import Header from "../Components/ui/Header/Header";
import { footerList } from "./utils/footerUtlis";
import { headerData } from "./utils/headerUtils";

export const metadata = {
  title: "LibraryApp - Home",
  description: "App de libreria",
};

export default async function Home() {
  const productList = await fetch("http:localhost:3000/api/home", {
    cache: "force-cache",
    next: { revalidate: 60000 },
  }).then((res) => res.json());

  return (
    <main className="space-y-4 rounded p-2">
      <Header data={headerData} />
      <div className="p-2">
        <h2 className="text-3xl pb-4">Que producto te gusta?!</h2>
        {/* <Suspense fallback={<div>Cargando...</div>}> */}
          {productList && <ProductList products={productList} />}
        {/* </Suspense> */}
        <Footer data={footerList} />
      </div>
    </main>
  );
}
