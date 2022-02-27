import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Main from "./pages/Main.js"

const App=(props)=> {
  
  return (
    <Router>
    <Route path="/" component={Main} />
    {/* <Route path="/lionking" component={LionKing} />
    <Route path="/spiderman" component={SpiderMan} /> */}
  </Router>
  );
}

export default App;
