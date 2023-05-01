import React from 'react'
import { Container, Row } from 'react-bootstrap'

import { FaGraduationCap, FaRegStar } from "react-icons/fa";
import bannerImg from '../../assets/bannerImg.png'
import './Home.css'
const Home = () => {
  return (
    <div className='home-page'>

      <div className='banner'>
        <div className='container d-flex justify-content-between align-items-center pt-5'>
          <div className='serviceList'>
            <h1 className='text-white'>We Provides</h1>
            <hr className='text-white'></hr>
            <ul className="text-white">
              <li>Item 1</li>
              <li>Item 1</li>
            </ul>
          </div>
          <div className=''>
            <img className="img-fluid w-100" src={bannerImg}></img>
          </div>
        </div>
      </div>

      <div className='our-chefs container'>
        <h4 className='text-center text-dark mt-5'>Our Chefs</h4>
        <div className='chefs-item-container'>
            <div className="card" style={{width: "18rem"}}>
              <img src={bannerImg} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-center">Abdul Gaful: Master Chef</h5>
                <hr></hr>
                <div className='d-flex justify-content-between'>
                  <span><FaGraduationCap className='fs-4'></FaGraduationCap>-10</span>
                  <span className='flex-grow-1 ms-3'>Recipes-2</span>
                  <span className='d-flex align-items-center gap-1'><FaRegStar className='fs-6'></FaRegStar>4.8</span>
                </div>
                <hr></hr>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home