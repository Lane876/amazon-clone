import React, { useContext } from "react";
import { StateContext } from "../StateProvider";

const Product = ({ id, img, price, title, rating }) => {
  const [{basket}, dispatch] = useContext(StateContext)

  const addToBasket = () =>(
    dispatch({
      type: 'ADD_TO_BASKET',
      payload:{
        id: id,
        price: price,
        title: title,
        img: img,
        rating: rating,
      }
    })
  )

  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span key={i}>🌟</span>
            ))}
        </div>
      </div>
      <img src={img} alt="img" />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
};

export default Product;
