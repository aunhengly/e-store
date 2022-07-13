import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

import Buttons from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../store/cart/cart.selector";

import {
  CardDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles.jsx";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
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
