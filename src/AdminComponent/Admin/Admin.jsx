import React from 'react'
import AdminSideBar from './AdminSideBar'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../Dashboard/Dashboard'
import Orders from '../Oders/Orders'
import Menu from '../Menu/Menu'
import ProductCategory from '../ProductCategory/ProductCategory'
import Ingredients from '../Ingredients/Ingredients'
import RestaurantDetails from './RestaurantDetails'
import CreateMenuForm from '../Menu/CreateMenuForm'

const Admin = () => {
    const handleClose=()=>{

    }
  return (
    <div>
        <div className='lg:flex justify-between'>
            <div >
                <AdminSideBar handleClose={handleClose}/>
            </div>
            <div className='lg:w-[80%]'>
              <Routes>
                <Route path='/' element={<Dashboard/>}/>
                <Route path='/orders' element={<Orders/>}/>
                <Route path='/menu' element={<Menu/>}/>
                <Route path='/category' element={<ProductCategory/>}/>
                <Route path='/ingredients' element={<Ingredients/>}/>
                <Route path='/details' element={<RestaurantDetails/>}/>
                <Route path='/add-menu' element={<CreateMenuForm/>}/>
              </Routes>
            </div>
        </div>
    
    </div>
  )
}

export default Admin
