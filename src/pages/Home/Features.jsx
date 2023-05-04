import React from 'react'
import FeaturesData from '/public/data/features.json'
import FeatureCard from './FeatureCard'
import './Features.css'
const Features = () => {
    return (
        <div>
            <div className='our-features container p-5 '>
                <h4 className='text-center fw-bold m-5 text-white'>Our Features</h4>
                <div className='features-item-container text-white'>
                {
                    FeaturesData.map(feature=><FeatureCard key={feature.id} feature={feature}></FeatureCard>)
                }
                </div>
            </div>
        </div>
    )
}

export default Features