import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './styles/global';

import Home from './pages/index';
import SigninPage from './pages/signin';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signin" component={SigninPage} />
        </Switch>
      </Router>
      <GlobalStyle />
    </>
  );
}

export default App;
