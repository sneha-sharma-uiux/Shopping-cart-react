import React from "react";
import classnames from "classnames";

const Card = ({ rowRev, url, info, heading, btnLable, onClick }) => (
  <section className={classnames({ Card: 1, "Card--revs": rowRev })}>
    <img className="Card--Img" src={url} alt={info}></img>
    <article className="Card-info">
      <h1>{heading}</h1>
      <p className="Card-info--Text">{info}</p>
      <button className="Card-info--btn" onClick={onClick}>
        {btnLable}
      </button>
    </article>
  </section>
);
export default Card;
