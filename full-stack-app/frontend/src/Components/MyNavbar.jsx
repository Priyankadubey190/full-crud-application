import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import { FaBars, FaShoppingCart } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useState } from "react";


export const Navbar = () => {
  const [Mobile, setMobile] = useState(false);
  
  return (
    <nav className="mynavbar">
<img src="https://github.com/Priyankadubey190/full-crud-application/raw/main/full-stack-app/frontend/public/images/web-logo.png" alt="" className="logo" />
      <ul
        className={Mobile ? "nav-link-mobile" : "nav-link"}
        onClick={() => setMobile(false)}
      >
        <a to="/" className="childa">     <li>HOME </li>
        </a>
         <a to="/women" className="childa">
          <li>WOMEN</li>
        </a>
        <a to="/men" className="" >
          <li>MEN</li>
        </a>
        <a to="/cart" className="childa">
          <li>MYORDER</li>
        </a>
       <a to="/signup" className="childa">
          <li>SIGN UP</li>
        </a>
        <a to="/login" className="childa">
          <li>LOGIN</li>
        </a>

        <a to="/cart" className="childlink">
            <li><FaShoppingCart className="cart"/></li>
        
        </a>

        <li>
        </li> 
      </ul>
      <button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
        {Mobile ? <ImCross /> : <FaBars />}
      </button>
    </nav>
  );
};  