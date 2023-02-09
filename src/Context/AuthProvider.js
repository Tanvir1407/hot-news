import React, { createContext } from 'react';
import app from '../firebase/firebase.config';
import { getAuth, signInWithPopup } from "firebase/auth";


const auth = getAuth(app)
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    
    const LoginFunction = (provider) => {
        return signInWithPopup(auth, provider);
    };

    const authInfo = {LoginFunction};
    return (
        <AuthContext.Provider value={authInfo}>
            {children};
        </AuthContext.Provider>
    );
};

export default AuthProvider;