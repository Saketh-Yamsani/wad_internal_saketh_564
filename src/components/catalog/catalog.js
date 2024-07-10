import React, { useState } from 'react';
import './catalog.css';

const Catalog = () => {
    const [cart, setCart] = useState([]);

    const products = [
        { id: 1, name: 'Product 1', price: 10, image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Product 2', price: 20, image: 'https://via.placeholder.com/150' },
        { id: 3, name: 'Product 3', price: 30, image: 'https://via.placeholder.com/150' },
    ];

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    return (
        <div className="catalog-container">
            <h2>Catalog</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <div className="product-item">
                            <img src={product.image} alt={product.name} />
                            <div>
                                <p>{product.name}</p>
                                <p>${product.price}</p>
                                <button type="button" onClick={() => addToCart(product)}>Add to Cart</button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Catalog;
