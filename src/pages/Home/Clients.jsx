import React from 'react'
import ClientsData from '/public/data/clients.json'
import Client from './Client'
import './Clients.css'
const Clients = () => {
    return (
        <div className='clientBg'>
            <div className='our-features container p-5 '>
                <h4 className='text-center fw-bold m-5 text-white'>Our Corporate Clients</h4>
                <div className='clients-item-container text-white'>
                    {
                        ClientsData.map(client=><Client key={client.id} client={client}></Client>)
                    }
                </div>
            </div>
        </div>

    )
}

export default Clients