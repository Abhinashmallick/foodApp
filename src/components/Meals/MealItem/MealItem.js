import { useContext } from 'react';
import CartContext from '../../../store/cart-context';

import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
    const cartCtx = useContext(CartContext);
    const {id, name, description, price} = props.meal;

    const priceDetails = `$${price.toFixed(2)}`;

    const addToCartHandler = amount => {
        cartCtx.addItem({
            id: id,
            name: name,
            amount: amount,
            price: price
        });
    };
    return (
        <li className={classes.meal}>
            <div>
                <h3>{name}</h3>
                <div className={classes.description}>{description}</div>
                <div className={classes.price}>{priceDetails}</div>
            </div>
            <div>
                <MealItemForm id={id} onAddToCart={addToCartHandler} />
            </div>
        </li>
    );
};

export default MealItem;