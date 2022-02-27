import React from 'react';
import {
  BrowserRouter as Switch, Route} from "react-router-dom";

// import { Main } from 'pages';
import Main from './pages/Main';

const App=()=> {

  return (
    <Switch>
        <Route exact path="/" component={Main} />
    </Switch>
  );
}

export default App;
