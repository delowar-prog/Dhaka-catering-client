import React from 'react'
import { Container } from 'react-bootstrap'
import { FaPhone, FaRegEnvelope } from 'react-icons/fa'

export const Footer = () => {
  return (
    <div className='' style={{backgroundColor:"#54595F", color:"#EFC40B"}}>
      <Container>
        <div className='contact'>
          <h4>Contact Info.</h4>
          <p><FaRegEnvelope></FaRegEnvelope>dhakacatering@gmail.com</p>
          <p><FaPhone></FaPhone>00173811850</p>
        </div>
        <div className='links'>
          <h4>Important Links</h4>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className='newsletters'>
          <h4>Newsletter</h4>
          <form>
          
          </form>
        </div>
      </Container>
    </div>
  )
}
