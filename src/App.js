import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Wrapper from "components/_Wrapper";
import Home from "pages/Home";

//////////////////////// COMPONENT ////////////////////////
export default function App() {
  return (
    <Router>
      <Wrapper>
        <Switch>
          <Route exact path="/" component={() => <Home />} />
        </Switch>
      </Wrapper>
    </Router>
  );
}
