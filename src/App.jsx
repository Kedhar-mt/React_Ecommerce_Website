import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Men from './Components/Men';
import Women from './Components/Women';
import Kids from './Components/Kids';
import Cart from './Components/Cart';
import Brands from './Components/Brands';
import Arrivals from './Components/Arrivals';
import Sale from './Components/Sale';
import Voucher from './Components/Voucher';
import Promo from './Components/Promo';
import { ShopContextProvider } from './context/shop-context';
import ErrorBoundary from './ErrorBoundary';

const App = () => {
  return (
    <ErrorBoundary>
    <ShopContextProvider>
    <Router>
      <Navbar />
      <Routes>
        {/* Render multiple components on the root path '/' */}
        <Route 
          path="/" 
          element={
            <>
              <Hero />
              <Brands />
              <Arrivals />
              <Sale />
              <Voucher />
              <Promo />
            </>
          } 
        />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
    </ShopContextProvider>
    </ErrorBoundary>
  );
};

export default App;
