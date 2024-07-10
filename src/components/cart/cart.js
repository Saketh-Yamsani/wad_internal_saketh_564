import React, { useState } from 'react';
import './cart.css';

const Cart = () => {
    const [cart, setCart] = useState([
        { id: 1, name: 'Product 1', price: 10, image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Product 2', price: 20, image: 'https://via.placeholder.com/150' },
        { id: 3, name: 'Product 3', price: 30, image: 'https://via.placeholder.com/150' },
    ]);

    const removeFromCart = (productId) => {
        setCart(cart.filter(product => product.id !== productId));
    };

    return (
        <div className="cart-container">
            <h2>Cart</h2>
            <ul>
                {cart.map(product => (
                    <li key={product.id}>
                        <div className="cart-item">
                            <img src={product.image} alt={product.name} />
                            <div>
                                <p>{product.name} - ${product.price}</p>
                                <button type="button" onClick={() => removeFromCart(product.id)}>Remove from cart</button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;
