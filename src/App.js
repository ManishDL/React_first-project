import React from 'react';
import { Button } from '@chakra-ui/react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import ColorModeSwitcher from './ColorModeSwitcher';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import Videos from './components/videos';
import Upload from './components/Upload';
import Login from './components/Login';
import Signup from './components/Signup';
function App() {
  return (

       <Router>
        <Header/>
        
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/videos" element={<Videos/>}/>
          <Route path="/Upload" element={<Upload/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Signup" element={<Signup/>}/>
        </Routes>
        <Footer/>
       </Router>
  )
}

export default App;
