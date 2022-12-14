import React from "react";
import style from "../Pages/womencloth.module.css"

const ClothCard = ({ id,img,price,review }) => {
  return (
    <div data-testid={`watch-card-wrapper-${id}`} className={style.childcon}>
      <div>
        <img data-testid="watch-card-image" src={img} alt="" height="150px"/>
      </div>
      <div className={style.detail}>
        <div data-testid="watch-name">Price <span>{price}</span></div>
        <div data-testid="watch-category">Review <span>{review}</span></div>
      </div>
    </div>
  );
};

export default ClothCard;
