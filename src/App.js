import React from 'react';
import Navbar from './components/LandingPage/Navbar';
import './App.css';
import Home from './components/LandingPage/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        {/* <Route path='/signup' component={SignUp} /> */}
      </Switch>
    </Router>
  )
}

export default App;
