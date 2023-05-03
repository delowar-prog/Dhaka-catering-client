import React from 'react'
import './ChefDetails.css'
import { AiOutlineLike } from "react-icons/ai";
import { FaGraduationCap, FaRegStar } from "react-icons/fa";
import { useLoaderData } from 'react-router-dom';
import RecipeItem from '../RecipeItem/RecipeItem';
const ChefDetails = () => {
  const chefDetails=useLoaderData()
  const {id,chefName,likes, photo,experience,chefDetail,recipes_list}=chefDetails
  return (
    <div className='bg-dark'>
      <div className='' style={{ height: "15px", backgroundColor: "#676767" }}>
      </div>
      <div className='w-100 BannerBg'>
        <h2 className='my-0 p-4 text-center text-white'>Chef Details</h2>
      </div>
      <div className='details-about-chef container  p-3 text-light'>
        <div className='p-4 border-0 rounded d-flex flex-column flex-md-row gap-4'>
          <div className='profileImg w-50'>
            <img src={photo} className='w-100'></img>
            <h5 className='my-4'>{chefName}</h5>
            <hr></hr>
            <div className='d-flex justify-content-between'>
              <span className='fs-6'><FaGraduationCap className='fs-4'></FaGraduationCap>{experience}</span>
              <span className='fs-6'>Recipe {recipes_list.length}</span>
              <span className='d-flex align-items-center gap-1 fs-6'><AiOutlineLike className='fs-5'></AiOutlineLike>{likes}</span>
            </div>
            <hr></hr>
            <div>
              <h6>More About {chefName}: </h6>
              <p className='text-justify fs-6'>{chefDetail}</p>
            </div>
          </div>
          <div className='details-recipes px-4 w-100'>
            <div>
              <h5>My Recipes: </h5>
              <div className='recipes-details'>
              {
                recipes_list.map((recipe,i)=><RecipeItem key={i} recipe={recipe}></RecipeItem>)
              }
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ChefDetails