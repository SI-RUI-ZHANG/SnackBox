import {CartItemContainer, Name, Body} from './cart-item.styles'

import React, {memo} from 'react';
import {CartItem as CartItemType} from "../../store/cart/cart.types";

type CartItemProps = {
  cartItem: CartItemType
}

const CartItem = memo(({cartItem}: CartItemProps) => {
  const {name, imageUrl, price, quantity} = cartItem
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Body>
        <Name>{name}</Name>
        <span className={'price'}>{quantity} &#xd7; ${price}</span>
      </Body>
    </CartItemContainer>
  );
});

export default CartItem;
