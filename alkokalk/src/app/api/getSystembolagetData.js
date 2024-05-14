const getSystembolagetData = async () => {
    const url = `https://susbolaget.emrik.org/v1/products`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export default getSystembolagetData