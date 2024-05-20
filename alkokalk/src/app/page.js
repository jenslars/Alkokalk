"use client";

import NavigationBar from "./components/NavigationBar";
import SortFilter from "./components/Sort&Filter";
import ProductList from "./components/ProductList";

export default function Home() {
  return (
    <main>
      <NavigationBar></NavigationBar>
      <SortFilter></SortFilter>
      <ProductList></ProductList>
    </main>
  );
}
