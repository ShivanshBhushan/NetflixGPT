import React, { useEffect } from 'react'
import Browse from './Browse'
import { createBrowserRouter} from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Login from './Login'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'

const Body = () => {

  const dispatch = useDispatch();

  const appRouter = createBrowserRouter(
    [
      {
        path:"/",
        element:<Login/>
      },
      {
        path:"/browse",
        element: <Browse/>
      }
    ]
  )

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid, displayName, email} = user;
        // ...
        dispatch(addUser({uid,email,displayName}));
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
      }
    });
  },[])

 
  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  )
}

export default Body