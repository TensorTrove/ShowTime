import React from "react";
import Homepage from "./components/homepage";
import Searchpage from "./components/searchpage";
import Searchbar from "./components/searchbar";
import Seatbooking from "./components/seatbooking";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PreLoader from "./components/Preloader";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <PreLoader/>
      <Searchbar/>
        <Routes>
          <Route path='/' Component={Homepage} />
          <Route path='/search' Component={Searchpage} />
          <Route path='/booking' Component={Seatbooking} />
        </Routes>
      </BrowserRouter>
    </div>
  );
} 

export default App;
