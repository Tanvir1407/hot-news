import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='m-3 md:mx-auto w-60 pb-28'>
            <h1 className='text-3xl font-serif font-bold pb-4 md:pb-8'>Please Login ...</h1>
            <form>
                <input className='my-3 focus:outline-0 rounded-md h-10 w-64 px-3' placeholder='email' type="email" /> <br />
                <input className='my-3 focus:outline-0 rounded-md h-10 w-64 p-3' placeholder='password' type="password" /> <br />
                <button className='my-3 rounded-md h-10 w-64 text-white text-lg font-bold bg-orange-600' type='submit'>Login</button>
            </form>
            <p className='text-gray-600 font-serif '>New to Website, Please <span className='text-blue-500 underline'><Link to="/register">Register</Link></span></p>
        </div>
    );
};

export default Login;