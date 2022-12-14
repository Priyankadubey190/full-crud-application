import React from 'react'
import {Route, Routes} from "react-router-dom"
import { Login } from '../Components/Login'
import ReqAuth from '../Components/ReqAuth'
import { Signup } from '../Components/Signup'
import Product from './Product'
import SingleCloth from './SingleCloth'
import {WomenClothData} from './WomenClothData'

export default function AllRoute() {
  return (
    <Routes>
    <Route path="/" element={<WomenClothData />} />
    <Route path='/signup' element={<Signup/>} />
    <Route path='/login' element={<Login/>} />
    <Route path="/notes" element={
   <ReqAuth> <Product/> </ReqAuth>}/>
    <Route path="/prodectdetails/:id" element={<ReqAuth> <SingleCloth /> </ReqAuth>} />
  </Routes>
  )
}
