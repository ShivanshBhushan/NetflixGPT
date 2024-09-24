import React from 'react'
import Browse from './Browse'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Login from './Login'
import { Provider } from 'react-redux'
import appStore from '../utils/appStore'

const Body = () => {

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


  return (
    <div>
      <Provider store={appStore}>
        <RouterProvider router={appRouter}></RouterProvider>
        </Provider>
    </div>
  )
}

export default Body