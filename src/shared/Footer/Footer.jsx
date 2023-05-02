import React from 'react'
import { Container } from 'react-bootstrap'
import { FaPhone, FaRegEnvelope } from 'react-icons/fa'
import './Footer.css'
export const Footer = () => {
  return (
    <div className='' style={{backgroundColor:"#54595F", color:"#EFC40B"}}>
      <Container className='d-flex flex-column flex-md-row justify-content-around p-5 gap-5'>
        <div className='contact w-100'>
          <h4 className='my-4'>Contact Info.</h4>
          <p className='d-flex align-items-center gap-2'><FaRegEnvelope className='fs-5'></FaRegEnvelope>dhakacatering@gmail.com</p>
          <p className='d-flex align-items-center gap-2'><FaPhone className='fs-5'></FaPhone>00173811850</p>
        </div>
        <div className='links w-100'>
          <h4 className='my-4'>Important Links</h4>
          <ul className='list-unstyled fs-5'>
            <li className='my-2'>Home</li>
            <li className='my-2'>About Us</li>
            <li className='my-2'>Services</li>
            <li className='my-2'>Contact Us</li>
          </ul>
        </div>
        <div className='newsletters flex-grow-1 w-100'>
          <h4 className='my-4'>Newsletter</h4>
          <form>
            <div>
              <input className='bgInput border-0 p-1 my-1' type="text" placeholder='Name'></input><br/>
              <input className='bgInput border-0 p-1 my-1' type="text" placeholder='Email'></input><br/>
              <input className='bgInput border-0 p-1 my-1' type="text" placeholder='Mobile'></input><br/>
              <button className='btn btn-success w-100 my-1 text-warning fw-bold'>Subscirbe</button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  )
}
