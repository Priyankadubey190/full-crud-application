import React from 'react'
import "./navbar.css";
import {FaAlignJustify} from "react-icons/fa";
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  return (
    <div>
        <header className="header">
        <div className="container1 flex">
            {/* <span className="logo">OYODO</span> */}
            <img src="https://github.com/Priyankadubey190/full-crud-application/raw/main/full-stack-app/frontend/public/images/web-logo.png" alt="" class="logoimg" />
            <label className="bars" for="toggle">
            <FaAlignJustify />

            </label>
            <input id="toggle" type="checkbox" />
            <nav className="nav">
                <ul className="flex1 aligncenter bg-column">
                    <li className="nav-item">
                        {/* <a href="/login">Home</a> */}
                        <Link to="/" className="nav-text">WOMEN</Link>
                    </li>
                    <li className="nav-item">
                        {/* <a href="/login">Home</a> */}
                        <Link to="/" className="nav-text">MEN</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/cart" className="nav-text">my order</Link>
                    </li>
                    <li className="nav-item">
                       <Link to="/signup" className="nav-text">Sign Up</Link>
                    </li >
                    <li className="nav-item">
                       <Link to="/login" className="nav-text">Login</Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link to="/product/:id" className="nav-text"> 
                        <img src="https://toppng.com/uploads/preview/shopping-cart-png-image-shopping-cart-icon-sv-11562865326ta92uix1ak.png" height="50px" width="60px" alt="" /> 

                        {/* <FontAwesomeIcon icon="fa-solid fa-cart-shopping" className="cart"/> */}
                        </Link>
                    </li>
                   
                </ul>
            </nav>
        </div>
    </header>
    </div>

  )
}
