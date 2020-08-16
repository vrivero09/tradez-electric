import React, { Component } from 'react';
import './App.css';
import './components/Nav';
import Navigation from './components/Nav';
import { Route, Router, Switch } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Services from './components/services';
import Contact from './components/contact';

class App extends Component{
  render(){
    return(
      <Router>
      <div>
        <Navigation />
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/Home' component={Home} />
            <Route path='/Services' component={Services} />
            <Route path='/About' component={About} />
            <Route path='/Contact' component={Contact} />
          </Switch>
      </div>
    </Router>
  
    );
  }
}

export default App;