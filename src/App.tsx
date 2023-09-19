import React, { useEffect, useState } from 'react'
import './App.css';
import Register from './pages/Register';
import Login from './pages/Login';
import Nav from './components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
// import Cookies from 'js-cookie';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Nav />
          <main className="form-signin w-100 m-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          </main>
        </BrowserRouter>
    </div>
  );
}

export default App;
