import React from "react";

const Product = ({ name, imageURL, description, price, clicked }) => (
  <article className="productWraper">
    <h1>{name}</h1>

    <div className="productImgInfo destopTab">
      <img className="productImg" src={imageURL} alt={name}></img>
      <p className="productInfo">{description}</p>
    </div>
    <div className="productImgInfo mobile">
      <img className="productImg" src={imageURL} alt={name}></img>
      <div className="productInfoPrice">
        <p className="productInfo">{description}</p>
        <div className="priceWrap">
          <button className="buyNow" onClick={clicked}>
            Buy Now @ Rs.{price}
          </button>
        </div>
      </div>
    </div>
    <div className="priceWrap destop">
      <p className="productMrp">MRP Rs.{price}</p>
      <button
        aria-label={`Buy ${name} @ Rs.${price}, press enter`}
        className="buyNow"
        onClick={clicked}
      >
        Buy Now
      </button>
    </div>
    <div className="priceWrap tab">
      <button className="buyNow" onClick={clicked}>
        Buy Now @ Rs.{price}
      </button>
    </div>
  </article>
);

export default Product;
