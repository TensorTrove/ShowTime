import React from "react";
import Homepage from "./components/homepage";
import Searchpage from "./components/searchpage";
import Searchbar from "./components/searchbar";
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Searchbar/>
        <Routes>
          <Route path='/' Component={Homepage} />
          <Route path='/search' Component={Searchpage} />
        </Routes>
      </BrowserRouter>
    </div>
  );
} 

export default App;
