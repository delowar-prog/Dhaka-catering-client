import React from 'react'
import ChefCard from './ChefCard'
import './Chef.css'
const Chefs = ({chefs}) => {
    return (
        <div>
            <div className='our-chefs container'>
                <h4 className='text-center fw-bold mt-5 text-white'>Our Chefs</h4>
                <div className='chefs-item-container mt-4'>
                        {
                            chefs.map(chef => <ChefCard key={chef.id} chef={chef}></ChefCard>)
                        }
                </div>
            </div>
        </div>
    )
}

export default Chefs