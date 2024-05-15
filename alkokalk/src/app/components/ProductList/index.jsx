import { useEffect, useState } from 'react';
import getSystembolagetData from "@/app/api/getSystembolagetData";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            let data = await getSystembolagetData();
            if (data) {
                data = data.map(product => ({
                    ...product,
                    alcoholAmountMl: calculateAlcoholAmountMl(product.alcoholPercentage, product.volume),
                    apk: calculateAPK(product.alcoholPercentage, product.volume, product.price)
                })).sort((a, b) => b.apk - a.apk); 

                setProducts(data);
            } else {
                console.log('Failed to fetch data');
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
        return <div>Loading...</div>;
    }

    return (
        <div>
            {products.map((product, index) => (
                <div key={index}>
                    <div>Name: {product.productNameBold}</div>
                    <div>APK: {product.apk} ml/kr</div> {}
                </div>
            ))}
        </div>
    );
};

export default ProductList;
