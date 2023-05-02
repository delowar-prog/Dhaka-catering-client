import React from 'react'
import { FaGraduationCap, FaRegStar } from "react-icons/fa";
import bannerImg from '../../assets/bannerImg.png'
const ChefCard = ({chef}) => {
    const {id,chefName,photo,experience,recipes_list}=chef
    return (
        <div className="col card p-3" style={{ width: "18rem" }}>
            <img src={photo} className="card-img-top w-100" alt="..." />
            <div className="card-body">
                <h5 className="card-title text-center">{chefName}</h5>
                <hr></hr>
                <div className='d-flex justify-content-between'>
                    <span><FaGraduationCap className='fs-4'></FaGraduationCap>-{experience}</span>
                    <span className='flex-grow-1 ms-3'>Recipes-{recipes_list.length}</span>
                    <span className='d-flex align-items-center gap-1'><FaRegStar className='fs-6'></FaRegStar>4.8</span>
                </div>
                <hr></hr>
                <button href="#" className="w-100 btnDesign">View Recipes</button>
            </div>
        </div>
    )
}

export default ChefCard