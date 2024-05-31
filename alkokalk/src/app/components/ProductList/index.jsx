import { useEffect, useState, useRef } from "react";
import getSystembolagetData from "@/app/api/getSystembolagetData";
import {
  StyledTable,
  StyledHeader,
  StyledCell,
  SkeletonRow,
  NoResultsMessage,
} from "./styles";
import { setItem, getItem, setMeta, getMeta } from "@/app/utils/indexedDB";
import { useIntersectionObserver } from "./intersectionObserver";

const ProductList = ({
  searchResults,
  resetProducts,
  isDescending,
  selectedCategory,
}) => {
  const [products, setProducts] = useState([]);
  const [originalProducts, setOriginalProducts] = useState([]);
  const [searchAttempted, setSearchAttempted] = useState(false);
  const [loading, setLoading] = useState(true);
  const REFRESH_INTERVAL = 24 * 60 * 60 * 1000;
  const [page, setPage] = useState(1);
  const productsPerPage = 20;
  const lastProductRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const lastFetch = await getMeta("lastFetch");
      const now = Date.now();

      let data = await getItem("systembolagetData");

      if (!data || !lastFetch || now - lastFetch > REFRESH_INTERVAL) {
        data = await getSystembolagetData();
        if (data) {
          await setItem("systembolagetData", data);
          await setMeta("lastFetch", now);
        } else {
          console.log("Failed to fetch data");
          setLoading(false);
          return;
        }
      }

      data = data
        .map((product) => ({
          ...product,
          alcoholAmountMl: calculateAlcoholAmountMl(
            product.alcoholPercentage,
            product.volume
          ),
          apk: calculateAPK(
            product.alcoholPercentage,
            product.volume,
            product.price
          ),
        }))
        .sort((a, b) => b.apk - a.apk);

      setProducts(data);
      setOriginalProducts(data);
      setLoading(false);
      console.log(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (searchResults && searchResults.length) {
      const updatedProducts = searchResults
        .map((product) => ({
          ...product,
          alcoholAmountMl: calculateAlcoholAmountMl(
            product.alcoholPercentage,
            product.volume
          ),
          apk: calculateAPK(
            product.alcoholPercentage,
            product.volume,
            product.price
          ),
        }))
        .sort((a, b) => b.apk - a.apk);

      setProducts(updatedProducts);
      setPage(1);
      setSearchAttempted(true);
    } else if (searchResults && searchResults.length === 0) {
      setProducts([]);
      setSearchAttempted(true);
    }
  }, [searchResults]);

  useEffect(() => {
    if (resetProducts) {
      setProducts(originalProducts);
      setPage(1);
      setSearchAttempted(false);
    }
  }, [resetProducts, originalProducts]);

  useEffect(() => {
    const sortedProducts = sortProducts(products);
    setProducts(sortedProducts);
  }, [isDescending]);

  useEffect(() => {
    if (selectedCategory) {
      const filteredProducts = originalProducts.filter(
        (product) =>
          product.categoryLevel1.toLowerCase() ===
          selectedCategory.toLowerCase()
      );
      setProducts(filteredProducts);
      setPage(1);
    } else {
      setProducts(originalProducts);
      setPage(1);
    }
  }, [selectedCategory, originalProducts]);

  useIntersectionObserver({
    target: lastProductRef,
    onIntersect: () => setPage((prevPage) => prevPage + 1),
    threshold: 1.0,
  });

  const sortProducts = (products) => {
    const sortedProducts = [...products].sort((a, b) => {
      if (isDescending) {
        return b.apk - a.apk;
      } else {
        return a.apk - b.apk;
      }
    });
    return sortedProducts;
  };

  const calculateAlcoholAmountMl = (alcoholPercentage, volume) => {
    return (alcoholPercentage / 100) * volume;
  };

  const calculateAPK = (alcoholPercentage, volume, price) => {
    const alcoholMl = calculateAlcoholAmountMl(alcoholPercentage, volume);
    return (alcoholMl / price).toFixed(2);
  };

  if (loading) {
    return (
      <StyledTable>
        <tbody>
          <SkeletonRow />
          <SkeletonRow />
          <SkeletonRow />
          <SkeletonRow />
        </tbody>
      </StyledTable>
    );
  }

  if (searchAttempted && products.length === 0) {
    return <NoResultsMessage>Inga sökresultat funna</NoResultsMessage>;
  }

  return (
    <StyledTable>
      <thead>
        <tr>
          <StyledHeader>Ursprung</StyledHeader>
          <StyledHeader>Namn</StyledHeader>
          <StyledHeader>Sort</StyledHeader>
          <StyledHeader>Pris</StyledHeader>
          <StyledHeader>Volym</StyledHeader>
          <StyledHeader>APK</StyledHeader>
        </tr>
      </thead>
      <tbody>
        {products
          .slice(0, page * productsPerPage)
          .map((product, index, self) => (
            <tr
              key={index}
              ref={index === self.length - 1 ? lastProductRef : null}
            >
              <StyledCell className="country">{product.country}</StyledCell>
              <StyledCell className="name">
                <a
                  href={`https://www.systembolaget.se/produkt/${product.categoryLevel1.toLowerCase()}/${product.productNameBold
                    .replace(/\s+/g, "-")
                    .toLowerCase()}-${product.productNumber}/`}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {product.productNameBold}
                </a>
              </StyledCell>
              <StyledCell className="category">
                {product.categoryLevel1}, {product.categoryLevel2},{" "}
                {product.categoryLevel3}
              </StyledCell>
              <StyledCell className="price">{product.price} kr</StyledCell>
              <StyledCell className="vol">{product.volume} ml</StyledCell>
              <StyledCell className="apk">{product.apk} ml/kr</StyledCell>
            </tr>
          ))}
      </tbody>
    </StyledTable>
  );
};

export default ProductList;
