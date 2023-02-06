import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import { FaBars, FaShoppingCart } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";

import { useState } from "react";
//import { logOut } from "../Redux/AuthReducer/action";

export const Navbar = () => {
  const [Mobile, setMobile] = useState(false);
  const { tokenData, isAuth } = useSelector((state) => state.AuthReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const handleLog = () => {
  //   if (isAuth) {
  //     dispatch(logOut());
  //   } else {
  //     navigate("/signin", { replace: true });
  //   }
  // };

  return (
    <nav className="mynavbar">
     
      <img src="https://github.com/Priyankadubey190/full-crud-application/raw/main/full-stack-app/frontend/public/images/web-logo.png" alt="" className="logo" />

      <ul
        className={Mobile ? "nav-link-mobile" : "mynav-link"}
        onClick={() => setMobile(false)}
      >
        <Link to="/">
          <li>HOME</li>
        </Link>
        <Link to="/women">
          <li>WOMEN</li>
        </Link>
        <Link to="/man">
          <li>MAN</li>
        </Link>

        <Link to="/login">
          <li>LOGIN</li>
        </Link>
        <Link to="/signup">
          <li>SIGN UP </li>
        </Link>
        <Link to="/cart">
        <li><FaShoppingCart className="cart"/></li>
        </Link>
        </ul>
        {/* <li>
          <button className="login" onClick={handleLog}>
            {isAuth ? "SignOut" : "SignIn"}
          </button>
        </li> */}
      
      <button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
        {Mobile ? <ImCross /> : <FaBars />}
      </button>
      
    </nav>
  );
};