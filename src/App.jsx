import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {
  createBrowserRouter,
  Route, 
  createRoutesFromElements, 
  RouterProvider,
       } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import RootLayout from './layouts/rootLayout'
import HelpLayout from './layouts/HelpLayout'
import Faq from './pages/help/faq'
import Contact from './pages/help/contact'
import NotFound from './pages/NotFound'
import CareersLayout from './layouts/CareersLayout'
import Careers, { careersLoader } from './pages/career/Careers'
import CareeerDetails, { CareerDetailsLoader } from './pages/career/CareerDetails'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
    <Route index element={<Home/>}/>
    <Route path="about" element={<About/>}/>
    <Route path='help' element={<HelpLayout/>}>
      <Route path='faq' element={<Faq/>}/>
      <Route path='contacts' element={<Contact/>}/>
    </Route>
    <Route path='careers' element={<CareersLayout/>}>
       <Route index
        element={<Careers/>} 
        loader={careersLoader}
        />
     <Route path=':id' element={<CareeerDetails/>} loader={CareerDetailsLoader}/>
    </Route>
    <Route path='*' element={<NotFound/>}/>
   </Route>
  )
);
function App() {

  return (
    <>
         <RouterProvider router={router}/>
     
    </>
  )
}

export default App
