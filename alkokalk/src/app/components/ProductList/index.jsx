import getSystembolagetData from "@/app/api/getSystembolagetData";

const ProductList = async () => {
    console.log("Vi är i fetchData");
    const data = await getSystembolagetData();
    if (data) {
        console.log('Data fetched successfully:', data);
    } else {
        console.log('Failed to fetch data');
    }

    return (
        console.log(data), data
    )


};



export default ProductList;