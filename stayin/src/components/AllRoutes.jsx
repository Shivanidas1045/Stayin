import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../Pages/Home'
import Hotels from '../Pages/Hotels'
import ContactUs from '../Pages/ContactUs'
import Register from '../Pages/Register'
import Login from '../Pages/Login'

const AllRoutes = () => {
  return (
    <div>
<Routes>
    <Route path="/"           element={<Home/>}/>
    <Route path="/hotels"     element={<Hotels/>}/>
    <Route path="/contactus"   element={<ContactUs/>}/>
    <Route path="/register"    element={<Register/>}/>
    <Route path="/login"       element={<Login/>}/>
</Routes>




    </div>
  )
}

export default AllRoutes