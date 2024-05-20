"use client";

import NavigationBar from "./components/NavigationBar";
import SortFilter from "./components/Sort&Filter";
import ProductList from "./components/ProductList";
import SearchBar from "./components/SearchFeature/SearchBar";

export default function Home() {
  return (
    <main>
      <NavigationBar></NavigationBar>
      <SortFilter></SortFilter>
      <ProductList></ProductList>
    </main>
  );
}
