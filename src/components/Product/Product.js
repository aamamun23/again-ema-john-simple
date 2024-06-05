import React from 'react';
import './Product.css';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {name, img, seller, price, stock} = props.product
    return (
        <div className='product-content'>
            <div className="product-img">
                <img src={img} alt={name} />
            </div>
            <div className="product-details">
                <h4>{name}</h4>
                <br />
                <p>by: {seller}</p>
                <p>${price}</p>
                <p> <small>Only {stock} items available. order soon...</small> </p>
                <button onClick={ () => props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faCartShopping} /> Add to cart</button>
            </div>
            
        </div>
    );
};

export default Product;