import React from 'react';
import'./Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        total += item.price;
    }

    //Format number to round return number
    const numberFormat = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }

    // Tax
    const tax = total/10;

    //Shipping amount
    let shipping = 0;
    if(total > 50){
        shipping = 0.99;
    }else if(total > 20){
        shipping = 2.99;
    }else if(total >0){
        shipping = 3.99;
    }

    const grandTotal = numberFormat(total+tax+shipping);

    return (
        <div className='cart-details'>
            <h2>Order summary</h2>
            <h4>Ordered items: {cart.length}</h4>
            <p>Sub total: ${numberFormat(total)}</p>
            <p>Tax: ${numberFormat(tax)}</p>
            <p>Shipping: ${numberFormat(shipping)}</p>
            <p>Grand total: ${grandTotal}</p>
        </div>
    );
};

export default Cart;