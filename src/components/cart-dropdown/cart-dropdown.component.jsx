import "./cart-dropdown.styles.scss";
import Buttons from "../button/button.component";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items"></div>
      <Buttons>GO TO CHECKOUT</Buttons>
    </div>
  );
};

export default CartDropdown;
