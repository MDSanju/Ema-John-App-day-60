import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import Rating from 'react-rating';

const Product = (props) => {
    const {name, img, seller, price, stock, star} = props.product;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="product-details">
                <h4 className="product-name">{name}</h4>
                <p><small>by: {seller}</small></p>
                <p style={{fontSize: '20px'}}>Price: ${price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <Rating className="icon-color" initialRating={star} emptySymbol="far fa-star" fullSymbol="fas fa-star" readonly></Rating>
                <br /><br />
                <button className="regular-button" onClick={() => props.handleAddToCart(props.product)}>{cartIcon} add to cart</button>
            </div>
        </div>
    );
};

export default Product;