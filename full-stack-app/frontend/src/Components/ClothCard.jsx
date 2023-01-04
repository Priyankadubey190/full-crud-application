import React from "react";
import style from "../Pages/womencloth.module.css"

const ClothCard = ({ id,img,price,review }) => {
  return (
    <div className={style.childcon}>
      <div className={style.flex}>
        <img src={img} alt="" className={style.proimg} />
      </div>
      <div className={style.detail}>
        <div>Price <span>{`$${price}`}</span></div>
        <div>Review <span>{review}</span></div>
      </div>
    </div>
  );
};

export default ClothCard;
