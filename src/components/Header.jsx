import React from 'react'
import Logo from '../assets/Login/Netflix_Logo_PMS.png'
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../utils/userSlice';

const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      dispatch(removeUser());
      navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });

  }

  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black w-[100%] flex justify-between'>
        <img src={Logo} alt='Netflix Logo' className='w-48 h-20'></img>
        {user && <button className='text-white text-xl font-semibold'
        onClick={handleSignOut}
        >Sign out</button>}
    </div>
  )
}

export default Header