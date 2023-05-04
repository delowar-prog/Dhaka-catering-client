import React from 'react'
import { FaGraduationCap, FaRegStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AiOutlineLike } from "react-icons/ai";
const ChefCard = ({chef}) => {
    const {id,chefName,photo,experience,recipes_list,likes}=chef
    return (
        <div className="col card p-3 mt-3 customWidth" style={{}} >
            <img src={photo} className="card-img-top w-100" alt="..." />
            <div className="card-body">
                <h5 className="card-title text-center">{chefName}</h5>
                <hr></hr>
                <div className='d-flex justify-content-between'>
                    <span><FaGraduationCap className='fs-4'></FaGraduationCap>-{experience}</span>
                    <span className='ms-3'>Recipes-{recipes_list.length}</span>
                    <span className='d-flex align-items-center gap-1'><AiOutlineLike className='fs-6'></AiOutlineLike>{likes}</span>
                </div>
                <hr></hr>
                <Link to={`/chef-details/${id}`}><button className="w-100 btnDesign">View Recipes</button></Link>
            </div>
        </div>
    )
}

export default ChefCard