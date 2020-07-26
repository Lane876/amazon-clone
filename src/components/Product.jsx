import React from "react";

const Product = ({ id, img, price, title, rating }) => {
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
      <button>Add to basket</button>
    </div>
  );
};

export default Product;
