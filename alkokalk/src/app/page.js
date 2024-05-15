"use client";

import NavigationBar from "./components/NavigationBar";
import ProductList from "./components/ProductList";

export default function Home() {
  return (
    <main>
      <NavigationBar></NavigationBar>
      <ProductList></ProductList>
    </main>
  );
}
