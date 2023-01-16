import {useState,useEffect} from "react";
import {useSearchParams} from "react-router-dom";

import Styles from "./filter.module.css";

const Filter = () => {
  // DO NOT CHANGE THE ORDER of the category filters: ie. Analog, Digital, Chronograph in the UI

  const [searchParams,setSearchParams] = useSearchParams();
 // console.log("search-cat",searchParams.getAll("color"))
  const [color,setColor] = useState(searchParams.getAll("color") || [])
  const handlefilter = (e)=>{
    const option = e.target.value;
    let newCategory = [...color]
    if(newCategory.includes(option)){
      newCategory.splice(newCategory.indexOf(option), 1);
    }
    else{
      newCategory.push(option);
    }
    setColor(newCategory)
  }
 // console.log("category",color)

  useEffect(() =>{
    const params = {};
    color && (params.color = color);
    setSearchParams(params);
  },[color,setSearchParams])
  return (
    <div>
      <div>
      <h3>Filters</h3>
      <div style={{color:"orangered"}}>Choose your color</div>
      <div data-testid="filter-category">
        <div className={Styles.filterBodyTextTwo}>
          <input type="checkbox" value="blue" onChange={handlefilter} defaultChecked={color.includes("blue")}  />
          <label>Blue</label>
          
        </div>
        <div className={Styles.filterBodyTextTwo}>
          <input type="checkbox" value="red" onChange={handlefilter} defaultChecked={color.includes("red")} />
          <label>Red</label>
        </div>
        <div className={Styles.filterBodyTextTwo}>
          <input type="checkbox" value="black" onChange={handlefilter} defaultChecked={color.includes("black")} />
          <label>Black</label>
        </div>
        <div className={Styles.filterBodyTextTwo}>
          <input type="checkbox" value="yellow" onChange={handlefilter} defaultChecked={color.includes("yellow")} />
          <label>Yellow</label>
        </div>
      </div>
      </div>
      <div className={Styles.boleft}></div>
    </div>
  );
};

export default Filter;
