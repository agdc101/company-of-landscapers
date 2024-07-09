import React from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import Home from '../views/Home';
import About from '../views/About';
import RootLayout from './Layout';


export default function RoutesWithAnimation() {
    const location = useLocation();

    console.log(location);
  
    return (
      <Routes location={location} key={location.key}>
        <Route element={<RootLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    );
  }