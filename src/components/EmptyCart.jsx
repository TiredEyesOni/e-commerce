import EmptyCartImg from "../assets/cart/empty-cart.png";

const EmptyCart = ({ openCart }) => {
  return (
    <div className="empty-cart">
      <img src={EmptyCartImg} alt="empty-cart" />
      <p>Your cart is empty</p>
      <button onClick={openCart}>Keep Browing</button>
    </div>
  );
};

export default EmptyCart;
