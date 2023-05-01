import React, { createContext, useEffect } from 'react'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
  const auth = getAuth(app);

  //user registretion
  const userRegistretion=(email,password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
  }
  //sign in with email & pass
  const userLogin=(email, password)=>{
    return signInWithEmailAndPassword(auth,email,password)
  }
  //sign in with google
  const googleProvider=new GoogleAuthProvider() 
  const loginWithGoogle=()=>{
    return signInWithPopup(auth,googleProvider)
  }
  //sign in with Git
  const githubProvider=new GithubAuthProvider() 
  const loginWithGithub=()=>{
    return signInWithPopup(auth,githubProvider)
  }
  //logout 
  const userLogout=()=>{
    return signOut(auth)
  }
  //set observer to observe user state
  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, (loggedUser)=>{
      console.log(loggedUser)
    })
    return ()=>unsubscribe()
  },[])

  const authInfo = {
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