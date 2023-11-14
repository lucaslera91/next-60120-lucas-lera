import Image from "next/image";
import ProductList from "./Components/ProductList/ProductList";
import Footer from "./Components/ui/Footer/Footer";
import Header from "./Components/ui/Header/Header";
import { footerList } from "./utils/footerList";
import { headerData } from "./utils/headerUtils";

export default function Home() {
  return (
    <main className="space-y-4">
      <Header data={headerData}/>
      <ProductList />
      <Footer data={footerList}/>
    </main>
  );
}
