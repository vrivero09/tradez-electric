import React, { Component } from 'react';
import './App.css';
import './components/Nav';
import { Route, Switch } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Services from './components/services';
import Contact from './components/contact';

class App extends Component{
  render(){
    const App = () =>(
      <div>
      <Switch>
          <Route exact path='/' component={Home} />
          <Route path='./Home' component={Home} />
          <Route path='./Services' component={Services} />
          <Route path='./About' component={About} />
          <Route path='./Contact' component={Contact} />
        </Switch>
    </div>

    )
    return(
      <Switch>
        <App />
      </Switch>
    );
  }
}

export default App;