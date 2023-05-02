import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub, FaGoogle } from "react-icons/fa";
const Login = () => {
  return (
    <div className='bgStyle py-5'>
    <div className='w-25 mx-auto bg-white rounded p-3'>
      <h4 className='text-2xl fw-bold mb-3 text-center mt-4'>Login</h4>
      <p className='text-danger'></p>
      <form onSubmit="">
        <input type='text' className='my-2 border-0 border-bottom w-100 p-2' placeholder='Email address'></input>
        <input type='password' className='my-3 border-0 border-bottom w-100 p-2' placeholder='Password'></input>
        <button className='btn btn-secondary w-100'>Login</button>
        <p className='text-center mt-2'>To create a new account? <span className='text-primary fw-bold'><Link to="/register">Register</Link></span></p>
      </form>
      <div className='login-with-others mx-auto'>
        <button className='p-1 border rounded w-100 d-flex justify-content-center align-items-center gap-2 fs-6 fw-bold my-2 text-secondary'><FaGoogle className='text-primary'></FaGoogle> Continue with Google</button>
        <button className='p-1 border rounded w-100 d-flex justify-content-center align-items-center gap-2 fs-6 fw-bold text-secondary'><FaGithub className='text-primary'></FaGithub> Continue with Github</button>
      </div>
    </div>

  </div>
  )
}

export default Login