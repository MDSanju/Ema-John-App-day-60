import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    // show total quantity from the local storage
    const reduceQuantity = (previous, current) => previous + current.quantity;
    const getTotalQuantity = cart.reduce(reduceQuantity, 0);
    // total price
    const reducerPrice = (previous, current) => previous + current.price * current.quantity;
    const getPriceTotal = cart.reduce(reducerPrice, 0);
    // total shipping cost
    const reducerShipping = (previous, current) => previous + current.shipping;
    const getShippingTotal = cart.reduce(reducerShipping, 0);
    return (
        <div style={{marginLeft: '10px'}}>
            <h2 style={{textAlign: 'center'}}>Order Summary</h2>
            <h3 style={{textAlign: 'center'}}>Items ordered: {getTotalQuantity}</h3>
            <p style={{marginTop: '36px'}}>Total: {getPriceTotal}</p>
            <p>Shipping Cost: {getShippingTotal}</p>
            {
                cart.map(data => <h5 key={data.key}>{data.name}</h5>)
            }
        </div>
    );
};

export default Cart;