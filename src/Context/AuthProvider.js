import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";


const auth = getAuth(app)
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    //login by google
    const LoginFunction = (provider) => {
        return signInWithPopup(auth, provider);
    };
    // signout
    const signout = () => {
        signOut(auth)
    }
    //get current user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser);
        })
        return () => {
            unsubscribe()
        }
    },[])
    const authInfo = {user, LoginFunction,signout};
    return (
        <AuthContext.Provider value={authInfo}>
            {children};
        </AuthContext.Provider>
    );
};

export default AuthProvider;