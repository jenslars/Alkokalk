"use client";

import { useState } from "react";
import SortFilter from "../app/components/Sort&Filter";
import ProductList from "../app/components/ProductList";

export default function Home() {
  const [searchResults, setSearchResults] = useState([]);
  const [resetProducts, setResetProducts] = useState(false);
  const [isDescending, setIsDescending] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSearch = (results) => {
    setSearchResults(results);
    setResetProducts(false);
  };

  const handleReset = () => {
    setSearchResults([]);
    setResetProducts(true);
  };

  const handleSort = () => {
    setIsDescending((prev) => !prev);
  };

  const handleFilter = (category) => {
    setSelectedCategory(category);
  };

  return (
    <main>
      <SortFilter
        onSearch={handleSearch}
        onReset={handleReset}
        onSort={handleSort}
        onFilter={handleFilter}
      />

      <ProductList
        searchResults={searchResults}
        resetProducts={resetProducts}
        isDescending={isDescending}
        selectedCategory={selectedCategory}
      />
    </main>
  );
}
