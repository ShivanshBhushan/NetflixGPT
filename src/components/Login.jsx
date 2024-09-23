import React, { useState } from 'react'
import Header from './Header'
import background from '../assets/Login/login_bg.jpg'

const Login = () => {

    const [signInForm, setSignInForm] = useState(true);

    const toggleSignUpForm = () =>{
        setSignInForm(!signInForm);
    }

  return (
    <div>
        <Header></Header>
        <div className='absolute -z-10'>
        <img src={background} alt='login page background' className='object-cover'></img>
        </div>
        <div className='flex'>
            <form 
            className='mx-auto mt-[25vh] mb-0  flex flex-col items-start bg-black bg-opacity-70 w-4/12 text-white rounded-lg bg-transparent'>
                <h1 className='mx-12  my-4 font-bold text-3xl'>{signInForm? 'Sign In': 'Sign Up'}</h1>
                {!signInForm && <input type='text' placeholder='Name'
                className='p-4 mx-12 my-4 w-[70%]  bg-gray-600 bg-opacity-75 border border-white rounded-sm'></input>}
                <input type='text' placeholder='Email Address'
                className='p-4 mx-12 my-4 w-[70%]  bg-gray-600 bg-opacity-75 border border-white rounded-sm'></input>
                <input type='password' placeholder='Password'
                className='p-4 mx-12 my-4 w-[70%]  bg-gray-600 bg-opacity-75 border border-white rounded-sm'></input>
                <button type='submit' className=' w-[70%] mx-12 mt-6 px-5 py-4 rounded-sm bg-red-700'>{signInForm? 'Sign In': 'Sign Up'}</button>
                <p className='px-12 py-8 text-lg cursor-pointer' onClick={toggleSignUpForm}>{signInForm? 'New to Netlix? Sign up now': 'Already a user? Sign In'}</p>
            </form>
        </div>
    </div>
  )
}

export default Login