import React from 'react';
import "./Product.css";
import StarIcon from '@material-ui/icons/Star';
import {useStateValue} from './StateProvider';

function Product({id, title, image, price, rating}) {
    const [{basket}, dispatch] = useStateValue();
    
    const addToBasket = () =>{
        dispatch ({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    };

    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <strong>{price}</strong>
                    <small>$</small>
                </p>
                <div className="product_rating">
                    {
                        Array(rating)
                        .fill()
                        .map((_,i) => (
                            <p key={i} className="product_star"><StarIcon /></p>
                        ))
                    }
                </div>
            </div>
            <img src={image} alt={basket.length}/>
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    );
}


export default Product;
