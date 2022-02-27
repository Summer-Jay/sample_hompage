import React from 'react';
import {
  BrowserRouter as Router,Switch, Route,Link} from "react-router-dom";

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
