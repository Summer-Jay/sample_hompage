import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import { Main } from 'pages';
import Main from './pages/Main';

const App=(props)=> {
    console.log("App.js");

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" component={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
