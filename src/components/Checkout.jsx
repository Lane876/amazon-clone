import React, { useContext } from "react";
import { StateContext } from "../StateProvider";
import banner from "../images/checkout_ad.png";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

const Checkout = () => {
  const [{ basket }, dispatch] = useContext(StateContext);
  return (
    <div className="checkout">
        <div className="checkout_left">

      <img src={banner} alt="" className="checkout_ad" />

      {basket?.length === 0 ? (
        <div>
          <h1>Your basket is empty</h1>
        </div>
      ) : (
        <div>
          <h2 className="checkout_title">Your shopping basket</h2>
          {basket.map((item, index) => (
            <CheckoutProduct
              key={index}
              id={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              img={item.img}
            />
          ))}
        </div>
      )}
        </div>
            {basket.length > 0 && (
                <div className="checkout_right">
                    <Subtotal/>
                </div>
            )}
    </div>
  );
};

export default Checkout;
