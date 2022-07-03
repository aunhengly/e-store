import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../contexts/cart.contex";

import Buttons from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import {
  CardDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles.jsx";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CardDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage> Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Buttons onClick={goToCheckoutHandler}>CHECKOUT</Buttons>
    </CardDropdownContainer>
  );
};

export default CartDropdown;
