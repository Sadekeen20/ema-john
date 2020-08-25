import React from 'react';
import "./Product.css"
const Product = (props) => {
    console.log(props);
    const { img, name, seller, price, stock } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div >
                <h4 className="product-name">{name}</h4>
                <br />
                <p><small>By:{seller}</small></p>
                <p>${price}</p>
                <br />
                <p><small>Only {stock} left in stock-Order soon</small></p>
                <button className="main-button"
                // onClick={props.handleAddProduct()}
                onClick={() => props.handleAddProduct(props.product)// when param pass is needed, otherwise just write {props.handleAddProduct}
                }
                >Add to Cart</button>
            </div>


        </div>
    );
};

export default Product;