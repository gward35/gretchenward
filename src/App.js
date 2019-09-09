import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from './components/nav';
import Home from './components/pages/home';
import Web from './components/pages/web';
import './css/style.css';

const App = () => {
  return (
    <Router>
      <>
        <div className="App">
          <Nav />
          <main>
            <Route exact path="/" component={Home} />
            <Route path="/web" component={Web} />
          </main>
        </div>
      </>
    </Router>
  )
}

export default App;
