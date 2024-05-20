"use client";

import NavigationBar from "./components/NavigationBar";
import ProductList from "./components/ProductList";
import SearchBar from "./components/SearchFeature/SearchBar";

export default function Home() {
  return (
    <main>
      <NavigationBar></NavigationBar>
      <SearchBar></SearchBar>
      {/* <ProductList></ProductList> */}
    </main>
  );
}
