"use client";

import { useState } from "react";
import NavigationBar from "./components/NavigationBar";
import SortFilter from "./components/Sort&Filter";
import ProductList from "./components/ProductList";

export default function Home() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (results) => {
    setSearchResults(results);
  };

  return (
    <main>
      <NavigationBar />
      <SortFilter onSearch={handleSearch} />
      <ProductList searchResults={searchResults} />
    </main>
  );
}
