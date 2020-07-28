import React, { useContext } from "react";
import { StateContext } from "../StateProvider";

const CheckoutProduct = ({ id, title, price, rating, img }) => {
  const [{ basket }, dispatch] = useContext(StateContext);

  function removeFromBasket() {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      payload: id,
    });
  }

  return (
    <div className="checkout_product">
      <img src={img} alt="" className="checkout_product_img" />
      <div className="checkout_product_info">
        <p className="checkout_product_title">{title}</p>
        <p className="checkout_product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="checkout_product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span key={i}>🌟</span>
            ))}
        </div>

        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
