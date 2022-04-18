import React from 'react';
import Navbar from './components/LandingPage/Navbar';
import './App.css';
import Home from './components/LandingPage/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import About from './components/LandingPage/AboutDuende';
// import Consulting from './components/pages/Consulting';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/' component={About} />
        <Route path='/sign-up' component={SignUp} />
        {/* <Route path='/consulting' component={Consulting} /> */}
      </Switch>
    </Router>
  );
}

export default App;
