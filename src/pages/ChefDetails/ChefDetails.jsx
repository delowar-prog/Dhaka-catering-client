import React from 'react'
import './ChefDetails.css'
import fackImg from '../../assets/asdff.jpg'
import { FaGraduationCap, FaRegStar } from "react-icons/fa";
const ChefDetails = () => {
  return (
    <div>
      <div className='' style={{ height: "15px", backgroundColor: "#676767" }}>
      </div>
      <div className='w-100 BannerBg'>
        <h2 className='my-0 p-4 text-center text-white'>Chef Details</h2>
      </div>
      <div className='details-about-chef container p-5'>
        <div className='p-4 border rounded d-flex flex-column flex-md-row'>
          <div className='profileImg w-50'>
            <img src={fackImg}></img>
            <h5 className='my-4'>Abdul Latif Khandaker</h5>
            <hr></hr>
            <div className='d-flex justify-content-between'>
              <span className='fs-5'><FaGraduationCap className='fs-2'></FaGraduationCap>-10y</span>
              <span className='flex-grow-1 ms-5 fs-5'>Recipes-2</span>
              <span className='d-flex align-items-center gap-1 fs-5'><FaRegStar className='fs-5'></FaRegStar>4.8</span>
            </div>
            <hr></hr>
            <div>
              <h6>More About Abdul Latif Khandaker: </h6>
              <p className='text-justify fs-6'>Amina Ahmed is a renowned Bangladeshi chef with over 15 years of experience in cooking traditional Bangladeshi cuisine. She is known for her expertise in using locally sourced spices and ingredients to create delicious and authentic dishes</p>
              <hr></hr>
            </div>
          </div>
          <div className='details-recipes px-4'>
            <div>
              <h5>Recipes Details: </h5>
              <div className='recipes-details'>
                <div className="card mb-3">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img src="..." className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-3">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img src="..." className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-3">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img src="..." className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ChefDetails