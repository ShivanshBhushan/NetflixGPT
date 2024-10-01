import React, { useEffect } from 'react'
import Logo from '../assets/Login/Netflix_Logo_PMS.png'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, displayName, email} = user;
        dispatch(addUser({uid,email,displayName}));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
              }
    });
    return ()=> unsubscribe();
  },[])

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
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black w-[100%] flex justify-between z-20'>
        <img src={Logo} alt='Netflix Logo' className='w-48 h-20'></img>
        {user && <button className='text-white text-xl font-semibold'
        onClick={handleSignOut}
        >Sign out</button>}
    </div>
  )
}

export default Header