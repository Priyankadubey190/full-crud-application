import axios from "axios";
import { useState, useEffect } from "react";
import { FaFacebookF, FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getClothData } from "../Redux/AppReducer/action";
import style from "./singlecloth.module.css";

const SingleCloth = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const singleprodect = useSelector((state) => state.AppReducer.cloths);

  const auth = useSelector((state) => state.AuthReducer.token);

  console.log("auth", auth);
  const [currentCloth, setCurrentCloth] = useState({});

  useEffect(() => {
    if (singleprodect?.length === 0) {
      dispatch(getClothData());
    }
  }, [singleprodect?.length, dispatch]);

  // useEffect(() => {
  //   if (id) {
  //     const temp = singleprodect?.filter((data) => data._id === Number(id));
  //     console.log("product",temp)
  //     temp && setCurrentCloth(temp);
  //   }
  // }, [singleprodect, id]);

  useEffect(() => {
    axios
      .get(
        `https://gleaming-suspenders-bass.cyclic.app/womendata/prodectdetails/${id}`,
        {
          headers: {
            authorization: auth,
          },
        }
      )
      .then((r) => {
        console.log("singlepro", r.data);
        setCurrentCloth(r.data);
      })
      .catch((er) => {
        console.log("singlepro", er);
      });
  }, []);

  return (
    <div className={style.container}>
      <h2>Welcome to Product's Detail</h2>
      <br />
      <div className={style.topcontainer}>
        <div className={style.imgcon}>
          <img src={currentCloth.image} alt="Cover Pic" />
        </div>
        <div className={style.leftcon}>
          <div className={style.leftchild}>
            <div className={style.icon}>
              <FaFacebookF className={style.iconsize}/>
              <FaInstagramSquare className={style.iconsize} />
            </div>
          <div className={style.flex}>
           <div>Color <span>{currentCloth.color}</span></div>
            <div>Review <span>{currentCloth.review}</span></div>
          </div>
          <div className={style.flex}>
          <div>Price <span>${currentCloth.price}</span></div>
          <button className={style.btn}>Add</button>
          </div>
          
          </div>
          
          
        </div>
      </div>
    </div>
  );
};

export default SingleCloth;
