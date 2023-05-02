import React, { createContext, useEffect, useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
  const [user, setUser]=useState(null)
  const [loading, setLoading]=useState(true)
  const auth = getAuth(app);

  //user registretion
  const userRegistretion=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
  //sign in with email & pass
  const userLogin=(email, password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }
  //sign in with google
  const googleProvider=new GoogleAuthProvider() 
  const loginWithGoogle=()=>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
  }
  //sign in with Git
  const githubProvider=new GithubAuthProvider() 
  const loginWithGithub=()=>{
    setLoading(true)
    return signInWithPopup(auth,githubProvider)
  }
  //logout 
  const userLogout=()=>{
    setLoading(true)
    return signOut(auth)
  }
  //set observer to observe user state
  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, (loggedUser)=>{
      setUser(loggedUser)
      setLoading(false)
    })
    return ()=>unsubscribe()
  },[])

  const authInfo = {
    user,
    loading,
    userRegistretion,
    userLogin,
    userLogout,
    loginWithGoogle,
    loginWithGithub
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider