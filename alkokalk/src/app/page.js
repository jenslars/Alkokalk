"use client";

import { useState } from "react";
import NavigationBar from "./components/NavigationBar";
import SortFilter from "./components/Sort&Filter";
import ProductList from "./components/ProductList";

export default function Home() {
  const [searchResults, setSearchResults] = useState([]);
  const [resetProducts, setResetProducts] = useState(false);

  const handleSearch = (results) => {
    setSearchResults(results);
    setResetProducts(false); 
  };

  const handleReset = () => {
    setSearchResults([]);
    setResetProducts(true);
  };

  return (
    <main>
      <NavigationBar />
      <SortFilter onSearch={handleSearch} onReset={handleReset} />
      <ProductList searchResults={searchResults} resetProducts={resetProducts} />
    </main>
  );
}
