import React, {useEffect, useState} from 'react';
import NavigationBar from '../components/NavigationBar';
import ProductsList from '../components/ProductsList';

const Home = () => {
    const [clothesHome, setClothesHome] = useState();

    useEffect(() => {
        const getClothesAPI = async() => {
            const clothesRawData = await fetch('https://fakestoreapi.com/products');
            const clothesJson = await clothesRawData.json();
            setClothesHome(clothesJson);
        }

        getClothesAPI();
    }, []);

    return (
        <>
            <NavigationBar />
            <ProductsList products={clothesHome} />
        </>
    );
};

export default Home;