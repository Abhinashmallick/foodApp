import { Fragment } from "react";
import classes from "./Header.module.css";
import mealImage from "../../assets/meals.jpeg";
import HeaderCartButton from "./HeaderCartButton";

const Header = props => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onClick={props.showCartHandler} />
            </header>
            <div className={classes['main-image']}>
                <img src={mealImage} alt="Delicious food!" />
            </div>
        </Fragment>
    );
};

export default Header;