// import "react-alice-carousel/lib/alice-carousel.css";
import "react-alice-carousel/lib/alice-carousel.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Navbar from './Component/Navbar';
import Home from './Component/Home';


function App() {
 
  return (
<BrowserRouter>
<Routes>
  <Route path='/' element={<Navbar/>}>
  <Route index element={ <Home/>}/>
  </Route>
</Routes>
</BrowserRouter>

  );
}

export default App;
