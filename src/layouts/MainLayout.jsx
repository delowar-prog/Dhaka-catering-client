import React from 'react'
import Header from '../shared/Header/Header'
import { Outlet } from 'react-router-dom'
import { Footer } from '../shared/Footer/Footer'

const MainLayout = () => {
  return (
    <div>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default MainLayout