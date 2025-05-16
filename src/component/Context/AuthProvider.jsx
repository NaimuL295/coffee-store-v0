import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Auth/Firebase';

const AuthProvider = ({children}) => {
   const createUser=(email,password)=>{
return createUserWithEmailAndPassword(auth,email,password)
   }
  
   const signUser=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
   }
    const userInfo={
createUser,
signUser

    }
    return (
        <div>
         <AuthContext value={userInfo}>
               {children}
         </AuthContext>
        </div>
    );
};

export default AuthProvider;