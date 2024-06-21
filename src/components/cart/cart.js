
import React from 'react';
import './cart.css'
const Cart = () => {
    const products = [
        { id: 1, name: 'Product 1', price: 10 },
        { id: 2, name: 'Product 2', price: 20 },
        { id: 3, name: 'Product 3', price: 30 },
    ];
    return (
        <div>
            <h2>Cart</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                        <button type="button">Remove from cart</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;
