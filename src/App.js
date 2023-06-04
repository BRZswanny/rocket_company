import React from 'react';
import { Route, Routes, useLocation } from "react-router-dom"
import { AnimatePresence } from 'framer-motion';
import './App.css';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Header from './Components/Header';

function App() {
  const location = useLocation();
  console.log(location.pathname);
  return (    
        <AnimatePresence mode="sync">
          <Header />
          <Routes location={location} key={location.pathname}>          
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Contact" element={<Contact />} />
            {/* <Route exact path="/About" element={<About />} />
            <Route exact path="/Careers" element={<Careers />} /> */}
          </Routes>  
        </AnimatePresence>
      

  );
}

export default App;
