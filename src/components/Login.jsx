import React, { useRef, useState } from 'react'
import Header from './Header'
import background from '../assets/Login/login_bg.jpg'
import { signInValidation } from '../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';


const Login = () => {

    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
    const dispatch = useDispatch();

    const[errorMessage, setErrorMessage] = useState(null);

    const handleSignIn = ()=>{
        const message = signInValidation(email.current.value, password.current.value)
        if(message === null){
            //create user
            if(!signInForm){
                //sign up logic
                createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(auth.currentUser, {
                        displayName: name.current.value , photoURL: "https://example.com/jane-q-user/profile.jpg"
                      }).then(() => {
                        // Profile updated!
                        const {uid, displayName, email} = auth.currentUser;
                        dispatch(addUser({uid, displayName, email}));
                      }).catch((error) => {
                        // An error occurred
                        // ...
                      });
                    console.log(user);
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode+": "+errorMessage);
                });
            }
            else{
                //sign in logic
                signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                alert("Logged in");
                // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode+": "+errorMessage);
                });
            }

        }
        else{
            setErrorMessage(message);
        }
    }

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
            <form onSubmit={(e)=>{e.preventDefault()}}
            className='mx-auto mt-[25vh] mb-0  flex flex-col items-start bg-black bg-opacity-80 w-4/12 text-white rounded-lg'>
                <h1 className='mx-12  mb-4 mt-8 font-bold text-3xl'>{signInForm? 'Sign In': 'Sign Up'}</h1>
                {!signInForm && <input type='text' placeholder='Name' ref={name}
                className='p-4 mx-12 my-4 w-[70%]  bg-gray-600 bg-opacity-75 border border-gray-800 rounded-sm'></input>}
                <input type='text' placeholder='Email Address' ref={email}
                className='p-4 mx-12 my-4 w-[70%]  bg-gray-600 bg-opacity-75 border border-gray-800 rounded-sm'></input>
                <input type='password' placeholder='Password' ref={password}
                className='p-4 mx-12 my-4 w-[70%]  bg-gray-600 bg-opacity-75 border border-gray-800 rounded-sm'></input>
                <p className='text-red-600 text-xl font-semibold px-12'>{errorMessage}</p>
                <button type='submit' onClick={handleSignIn} 
                className=' w-[70%] mx-12 mt-6 px-5 py-4 rounded-lg bg-red-700'>{signInForm? 'Sign In': 'Sign Up'}</button>
                <p className='px-12 py-8 text-lg cursor-pointer' onClick={toggleSignUpForm}>{signInForm? 'New to Netlix? Sign up now': 'Already a user? Sign In'}</p>
            </form>
        </div>
    </div>
  )
}

export default Login