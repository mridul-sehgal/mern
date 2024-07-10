import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from './App'
import Home from './components/home/Home'
import About from './components/about/About'
import User from './components/user/User'
import Github from './components/github/Github'
import { githubInfoLoader } from './components/githubInfoLoader'


const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='user/:id' element={<User/>} />
      <Route loader={githubInfoLoader} path='github' element={<Github/>} />
    </Route>
  )

)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
