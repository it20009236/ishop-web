import Collections from "@/components/Collections";
import ProductList from "@/components/ProductList";
import Home from "@/components/Home";

import Image from "next/image";

export default function HomeView() {
  return (
    <>
      <Home />
         
       
      <Collections />
      
      
      <ProductList />
    </>
  );
}

export const dynamic = "force-dynamic";
