import { useEffect, useState } from "react";
import getSystembolagetData from "@/app/api/getSystembolagetData";
import {
  StyledProductList,
  StyledProduct,
  StyledTable,
  StyledHeader,
  StyledCell,
} from "./styles";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let data = await getSystembolagetData();
      if (data) {
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
        console.log(data);
      } else {
        console.log("Failed to fetch data");
      }
    };

    fetchData();
  }, []);

  const calculateAlcoholAmountMl = (alcoholPercentage, volume) => {
    return (alcoholPercentage / 100) * volume;
  };

  const calculateAPK = (alcoholPercentage, volume, price) => {
    const alcoholMl = calculateAlcoholAmountMl(alcoholPercentage, volume);
    return (alcoholMl / price).toFixed(2);
  };

  if (!products.length) {
    // Här kan vi returnera skeleton istället? //Jens
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
            <StyledHeader>Lägg till i din inköpslista</StyledHeader>
            <StyledHeader>Länk</StyledHeader>
          </tr>
        </thead>
        <tbody>
          <tr>
            <StyledCell>Loading...</StyledCell>
          </tr>
        </tbody>
      </StyledTable>
    );
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
          <StyledHeader>Lägg till i din inköpslista</StyledHeader>
          <StyledHeader>Länk</StyledHeader>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={index}>
            <StyledCell className="hide-on-mobile">
              {product.country}
            </StyledCell>
            <StyledCell>{product.productNameBold}</StyledCell>
            <StyledCell className="hide-on-mobile">
              {product.categoryLevel1}
            </StyledCell>
            <StyledCell>{product.price} kr</StyledCell>
            <StyledCell>{product.volume} ml</StyledCell>
            <StyledCell>{product.apk} ml/kr</StyledCell>
            <StyledCell>
              <button>Lägg till</button>
            </StyledCell>
            <StyledCell className="hide-on-mobile">
              <a
                href={`www.systembolaget.se/produkt/${product.categoryLevel1.toLowerCase()}/${product.productNameBold
                  .replace(/\s+/g, "-")
                  .toLowerCase()}-${product.productId}/`}
              >
                Länk till produkt
              </a>
            </StyledCell>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default ProductList;
