import { useEffect, useState } from 'react';
import getSystembolagetData from "@/app/api/getSystembolagetData";

const ProductList = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getSystembolagetData();
            if (result) {
                console.log(result);
                setData(result);
            } else {
                console.log('Failed to fetch data');
            }
        };

        fetchData();
    }, []);

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {data.map(product => (
                <div key={product.productId}>
                    {product.productNameBold}
                </div>
            ))}
        </div>
    );
};

export default ProductList;
