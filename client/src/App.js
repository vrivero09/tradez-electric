import React, { Component } from 'react';
import './App.css';
import './components/Nav';
import { Route, Switch } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Services from './components/services';
import Contact from './components/contact';
import Nav from './components/Nav'
import Footer from './components/footer'

class App extends Component{
  render(){
    const App = () =>(
      <div className="page-container">
         <Nav />
        <div className="content-wrap">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/Home' component={Home} />
            <Route path='/Services' component={Services} />
            <Route path='/About' component={About} />
            <Route path='/Contact' component={Contact} />
          </Switch>
        </div>
    <div>
      <Footer />
    </div>
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