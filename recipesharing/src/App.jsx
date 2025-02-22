import React from 'react'
import './App.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Home from './pages/Home'
import MainNavigation from './components/MainNavigation'
import  AddFoodRecipe  from './pages/AddFoodRecipe'







const router=createBrowserRouter([
  {path:"/",element:<MainNavigation/>,children:[
 
    {path:"/",element:<Home/>},
    {path:"/addRecipe",element:<AddFoodRecipe/>},
  ]}
    

 
])

export default function App() {
  return (
   <>
   <RouterProvider router={router}></RouterProvider>
   </>
  )
}
