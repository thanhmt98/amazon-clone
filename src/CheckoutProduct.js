import React from 'react';
import './CheckoutProduct.css';
import StarIcon from '@material-ui/icons/Star';
import {useStateValue} from './StateProvider';


function CheckoutProduct({id, title, image, price, rating}) {
    const [{basket}, dispatch] = useStateValue();
    const removeFromBasket = () =>{
        dispatch ({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        });
    };
    
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct_image" src={image} alt={basket.length}/>

            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">{title}</p>
                <p className="checkoutProduct_price">
                    <strong>{price}</strong>
                    <small>$</small>
                </p>
                <div className="checkoutProduct_rating">
                    {
                        Array(rating)
                        .fill()
                        .map((_,i) => (
                            <p key={i} className="product_star"><StarIcon /></p>
                        ))
                    }
                </div>
                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct;