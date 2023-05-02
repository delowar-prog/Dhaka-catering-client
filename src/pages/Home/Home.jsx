import React, { useEffect, useState } from 'react'
import bannerImg from '../../assets/bannerImg.png'
import './Home.css'
import ChefCard from '../ChefCard/ChefCard'
import { useLoaderData } from 'react-router-dom'
const Home = () => {
  const [chefs, setChefs] = useState([])
  const [loading, setLoading] = useState(true)
  const allServices = useLoaderData()

  //load chefs from server
  useEffect(() => {
    fetch('http://localhost:5000/')
      .then(res => res.json())
      .then(data => {
        setChefs(data)
        setLoading(false)
      })

  }, [])

  return (
    <div className='home-page'>
      <div className='banner'>
        <div className='container d-flex justify-content-around align-items-center pt-5'>
          <div className='serviceList'>
            <h1 className='text-white'>We Provides</h1>
            <hr className='text-white'></hr>
            <ul className=" fs-4">
              {
                allServices.map(service => <li key={service.id}>{service.services}</li>)
              }
            </ul>
          </div>
          <div className=''>
            <img className="img-fluid w-100 w-lg-100" src={bannerImg}></img>
          </div>
        </div>
      </div>

      <div className='our-chefs container'>
        <h4 className='text-center headingStyle fw-bold mt-5'>Our Chefs</h4>
        <div className='chefs-item-container'>
          {
            loading && <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          }
          <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 gap-sm-1 gap-md-4 w-100 mx-auto pt-5' style={{ paddingLeft: "100px" }}>
            {
              chefs.map(chef => <ChefCard key={chef.id} chef={chef}></ChefCard>)
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home