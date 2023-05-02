import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../providers/AuthProvider';
const Login = () => {
  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')
  const [error, setError]=useState('')
  const {userLogin,loginWithGoogle,loginWithGithub}=useContext(AuthContext)
  const navigate=useNavigate()
  const location=useLocation();
  const from=location.state?.from?.pathname|| "/"
  // const from=location.state?.from?.pathname || '/'
  console.log(location)
  //control input value
  const handleEmailChange=(e)=>{
    const email=e.target.value
    setEmail(email)
  }
  const handlePasswordChange=(e)=>{
    const password=e.target.value
    setPassword(password)
  }
  const handleLogin=(e)=>{
    e.preventDefault()
    userLogin(email,password)
    .then(()=>{
      navigate(from)
    }).catch(error=>setError(error.message))
  }
  //login with google
  const loginByGoogle=()=>{
    loginWithGoogle().then(()=>{
      navigate(from)
    }).catch(error=>setError(error.message))
  }
  //login with github
  const loginByGithub=()=>{
    loginWithGithub().then(()=>{
      navigate(from)
    }).catch(error=>setError(error.message))
  }
  return (
    <div className='bgStyle py-5'>
    <div className='w-25 mx-auto bg-white rounded p-3'>
      <h4 className='text-2xl fw-bold mb-3 text-center mt-4'>Login</h4>
      <p className='text-danger'>{error}</p>
      <form onSubmit={handleLogin}>
        <input type='email' value={email} name='email' onChange={handleEmailChange} className='my-2 border-0 border-bottom w-100 p-2' placeholder='Email address' required></input>
        <input type='password' value={password} name='password' onChange={handlePasswordChange} className='my-3 border-0 border-bottom w-100 p-2' placeholder='Password' required></input>
        <button className='btn btn-secondary w-100'>Login</button>
        <p className='text-center mt-2'>To create a new account? <span className='text-primary fw-bold'><Link to="/register">Register</Link></span></p>
      </form>
      <div className='login-with-others mx-auto'>
      <button onClick={loginByGoogle} className='p-1  btn btn-success rounded w-100 d-flex justify-content-center align-items-center gap-2 fs-6 fw-bold my-2'><FaGoogle className='text-white'></FaGoogle> Continue with Google</button>
      <button onClick={loginByGithub} className='p-1  btn btn-success rounded w-100 d-flex justify-content-center align-items-center gap-2 fs-6 fw-bold '><FaGithub className='text-white'></FaGithub> Continue with Github</button>
      </div>
    </div>

  </div>
  )
}

export default Login