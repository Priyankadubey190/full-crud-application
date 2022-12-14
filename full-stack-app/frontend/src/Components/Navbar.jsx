import React from 'react'
import "./navbar.css";
import {FaAlignJustify} from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
        <header className="header">
        <div className="container1 flex">
            <span className="logo">OYODO</span>
            <label className="bars" for="toggle">
            <FaAlignJustify />

            </label>
            <input id="toggle" type="checkbox" />
            <nav className="nav">
                <ul className="flex1 aligncenter bg-column">
                    <li className="nav-item">
                        {/* <a href="/login">Home</a> */}
                        <Link to="/" className="nav-text">Home</Link>
                    </li>
                    <li className="nav-item">
                       <Link to="/signup" className="nav-text">Sign Up</Link>
                    </li >
                    <li className="nav-item">
                       <Link to="/login" className="nav-text">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/product/:id" className="nav-text">Product Details</Link>
                    </li>
                   
                </ul>
            </nav>
        </div>
    </header>
    </div>

  )
}
