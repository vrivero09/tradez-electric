import React, {Component} from 'react';
import './App.css';
import './components/Nav';
// import Navigation from './components/Nav';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Services from './components/services';
import Contact from './components/contact';

class App extends Component{

  render(){
    return(
      <BrowserRouter>
        <div className="App">
          <Route path='/' component={Home} />
          <Route exact path='/Services' component={Services} />
          <Route exact path='/About' component={About} />
          <Route exact path='/Contact' component={Contact} />
        </div>
      </BrowserRouter>
    )
  }

}

export default App;