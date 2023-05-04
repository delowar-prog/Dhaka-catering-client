import React from 'react'
import bannerImg from '../../assets/bannerImg.png'
const Banner = ({allServices}) => {
  return (
    <div className='banner'>
    <div className='container d-flex flex-column flex-md-row justify-content-around align-items-center pt-5'>
      <div className='serviceList'>
        <h1 className='text-white'>We Provides</h1>
        <hr className='text-white'></hr>
        <ul className="fs-4">
          {
            allServices.map(service => <li key={service.id}>{service.services}</li>)
          }
        </ul>
      </div>
      <div className=''>
        <img className="img-fluid w-100 w-lg-100 d-none d-md-block" src={bannerImg}></img>
      </div>
    </div>
  </div>
  )
}

export default Banner