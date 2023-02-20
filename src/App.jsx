import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Home from './pages/home/home';
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import List from './pages/list/List';
import Hotel from './pages/hotel/Hotel';




function App() {
  

  return (
   
<Router>
<Routes>


<Route path='/' element={<Home/>}/>

<Route path='/hotels' element={<List/>}/>
<Route path='/hotels/:id' element={<Hotel/>}/>



</Routes>



</Router>

  
  )
}

export default App
