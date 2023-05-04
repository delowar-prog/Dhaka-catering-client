import React, { useEffect, useState } from 'react'
import './Home.css'
import { useLoaderData } from 'react-router-dom'
import Banner from './Banner'
import Chefs from './Chefs'
import Features from './Features'
import Clients from './Clients'
const Home = () => {
  const [chefs, setChefs] = useState([])
  const [loading, setLoading] = useState(true)
  const allServices = useLoaderData()

  //load chefs from server
  useEffect(() => {
    fetch('https://dhaka-catering-server-delowarmilton-gmailcom.vercel.app/')
      .then(res => res.json())
      .then(data => {
        setChefs(data)
        setLoading(false)
      })

  }, [])

  return (
    <div className='bg-dark'>
      <Banner allServices={allServices}></Banner>
      {
        loading && <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      }
      <Chefs chefs={chefs}></Chefs>
      <Features></Features>
      <Clients></Clients>
    </div>
  )
}

export default Home