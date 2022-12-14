import {useState,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {useParams } from "react-router-dom";
import { getClothData } from "../Redux/AppReducer/action";

const SingleCloth = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const watches = useSelector((state) => state.AppReducer.cloths);
  const [currentCloth, setCurrentCloth] = useState({});

  useEffect(() => { 
    if (watches?.length === 0) {
      dispatch(getClothData());
    }
  }, [watches?.length, dispatch]);

  useEffect(() => {
    if (id) {
      const temp = watches?.find((watch) => watch.id === Number(id));
      temp && setCurrentCloth(temp); 
    }
  }, [watches, id]);
  return (
    <div>
      <h2>Watch name</h2>
      <h2>{currentCloth.review}</h2>
      <div>
        <img src={currentCloth.image} alt="Cover Pic" />
      </div>
      <div>
        <div>{currentCloth.price}</div>
      </div>
    </div>
  );
};

export default SingleCloth;
