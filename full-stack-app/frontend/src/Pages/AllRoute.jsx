import React from 'react'
import {Route, Routes} from "react-router-dom"
import { Login } from '../Components/Login'
import ReqAuth from '../Components/ReqAuth'
import { Signup } from '../Components/Signup'
import Address from './Address'
import CartPage from './CartPage'
import Checkout from './Checkout'
import Home from './Home'
import Product from './Product'
import SingleCloth from './SingleCloth'
import {WomenClothData} from './WomenClothData'

export default function AllRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    <Route path="/women" element={<WomenClothData />} />
    <Route path='/signup' element={<Signup/>} />
    <Route path='/login' element={<Login/>} />
    <Route path="/notes" element={
   <ReqAuth> <Product/> </ReqAuth>}/>
    <Route path="/prodectdetails/:id" element={<ReqAuth> <SingleCloth /> </ReqAuth>} />
    <Route path="/cart" element={<ReqAuth> <CartPage /> </ReqAuth>} />

    <Route path="/checkout" element={ <ReqAuth> <Checkout /> </ReqAuth>} /> 
    <Route path="/address" element={ <ReqAuth> <Address /> </ReqAuth>} /> 

  </Routes>
  )
}
