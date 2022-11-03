import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Error from './components/Error/index';
import Apartment from './pages/Appartement/Appartement';

const App = () => {
      return (
            <BrowserRouter>
                  <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/about" element={<About />} />
                        <Route path="apartment/:productId" element={<Apartment />} />
                        <Route exact path="*" element={<Error />} />
                  </Routes>
            </BrowserRouter>
      );
};

export default App;
