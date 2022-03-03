import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";

import "styles";
// import { Main } from 'pages';
import Main from "./pages/Main";
import MainSlider from "components/HomepageMain/MainSlider";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/sliderExample" component={MainSlider} />
    </Switch>
  );
};

export default App;
