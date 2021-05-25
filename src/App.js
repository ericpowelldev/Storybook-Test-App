import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import theme from 'lib/theme';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';

import Wrapper from 'components/_Wrapper';
import Home from 'pages/Home';

//////////////////////// COMPONENT ////////////////////////
export default function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Wrapper>
          <CssBaseline />
          <Switch>
            <Route exact path='/' component={() => <Home />} />
          </Switch>
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
}
