import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Register.css'
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [photo, setPhoto] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const { userRegistretion, updateProfileInfo, userLogout } = useContext(AuthContext)
  const navigate = useNavigate()

  //get input value
  const handleNameChange = (e) => {
    const name = e.target.value
    setName(name)


  }
  const handleEmailChange = (e) => {
    const email = e.target.value
    setEmail(email)

  }
  const handlePasswordChange = (e) => {
    const password = e.target.value
    var regularExpression = /^(?=.*[0-9])/;
    if (password.length < 6) {
      setError('Password must be at least 6 Charecters')
    } else if (!regularExpression.test(password)) {
      setError('Password must be at least one digit')
    }
    else {
      setError('')
    }
    setPassword(password)
  }

  const handlePhotoChange = (e) => {
    const photo = e.target.value
    setPhoto(photo)
  }

  const handleRegister = (e) => {
    e.preventDefault()
    setSuccess('')
    userRegistretion(email, password)
      .then(() => {
        setError('')
        setSuccess('Registration completed successfully..')
        updateProfileInfo(name, photo)
          .then(() => {
            userLogout().then(() => {
              navigate('/login')
            })
          })
          .catch(error => setError(error.message))
      }).catch(error => setError(error.message))
  }
  return (
    <div className='bgStyle py-5'>
      <div className='w-25 md-w-100 mx-auto bg-white rounded p-3'>
        <h4 className='text-2xl fw-bold mb-3 text-center mt-4'>Create an Account</h4>
        {
          error && <p className='text-danger'>{error}</p>
        }
        {
          success && <p className='text-success'>{success}</p>
        }
        <form onSubmit={handleRegister}>
          <input type='text' className='my-2 border-0 border-bottom w-100 p-2' value={name} name='name' onChange={handleNameChange} placeholder='Name' required></input>
          <input type='text' className='my-2 border-0 border-bottom w-100 p-2' value={email} name='email' onChange={handleEmailChange} placeholder='Email' required></input>
          <input type='password' className='my-2 border-0 border-bottom w-100 p-2' value={password} name='password' onChange={handlePasswordChange} placeholder='Password' required></input>
          <div className='my-2'>
            <label>Photo Url</label>
            <input className='my-2 border-0 border-bottom w-100 p-2' value={photo} name='photo' onChange={handlePhotoChange} type='file'></input>
          </div>
          <button className='btn btn-secondary w-100'>Create Account</button>
          <p className='text-center mt-2'>Already have an account? <span className='text-primary fw-bold'><Link to="/login">Login</Link></span></p>
        </form>
      </div>

    </div>
  )
}

export default Register