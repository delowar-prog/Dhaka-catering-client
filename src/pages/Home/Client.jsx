import React from 'react'

const Client = ({client}) => {
    return (
        <div className='client-card p-2 w-100'>
            <img src={client.image} className='w-100'></img>
        </div>
    )
}

export default Client