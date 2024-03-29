import React from 'react';
// import {useContext} from "react";
// import {CartContext} from "../../contexts/cart.context";
import {useDispatch} from "react-redux";
import {addItemToCart} from "../../store/cart/cart.action";
import {useSelector} from "react-redux";
import {selectCartItems} from "../../store/cart/cart.selector";

import {ProductCardContainer, Name, Price, Footer} from './product-card.styles'
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import {CategoryItem} from "../../store/categories/categories.types";

type ProductCardProps = {
  product: CategoryItem
}

const ProductCard = ({product}: ProductCardProps) => {
  const {name, price, imageUrl} = product
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product))

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`}/>
      <Footer>
        <Name>{name}</Name>
        <br/>
        <Price>Price: {price}$</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
