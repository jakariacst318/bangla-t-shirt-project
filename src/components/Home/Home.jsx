import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';
import './Home.css'
const Home = () => {
    const tshits = useLoaderData();
    const [cart, setCart] = useState([]);

    const handleAddToCart = tshirt =>{
        console.log(tshirt,'eid market ')
    }
    return (
        <div className='home-container'>
            <div className="t-shirts-container">
                {
                    tshits.map(tshirt => <TShirt
                        key={tshirt._id}
                        tshirt={tshirt}
                        handleAddToCart={handleAddToCart}
                    ></TShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;