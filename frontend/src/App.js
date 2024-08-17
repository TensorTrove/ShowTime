import React, { useState } from "react";
import Homepage from "./components/homepage";
import Searchpage from "./components/searchpage";
import Searchbar from "./components/searchbar";
import Seatbooking from "./components/seatbooking";
import { BrowserRouter, Route, Routes, Navigate, useActionData } from 'react-router-dom';
import PreLoader from "./components/Preloader";
import Login from "./components/login";
import Signup from "./components/signup";
import Hallselect from "./components/hallselect";
import Seatselect from "./components/seatselection";
import Finalbill from "./components/finalbill";

function PrivateRoute({ children }) {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
}


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PreLoader />
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/home' element={<Homepage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Navigate to="/login" replace />} />
          <Route path='/search' element={<Searchpage />} />
          <Route path='/booking' element={<Seatbooking />} />
          <Route path='/seat' element={<Hallselect />} />
          <Route path='/seatselection' element={<Seatselect />} />
          <Route path='/finalbill' element={<Finalbill />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;