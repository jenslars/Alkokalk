import getSystembolagetData from "@/app/api/getSystembolagetData";

const searchIndex = () => {
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
}