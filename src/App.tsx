import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './styles/global';

import Home from './pages';

function App() {
  return (
    <Router>
      <Home />
      <GlobalStyle />
    </Router>
  );
}

export default App;
