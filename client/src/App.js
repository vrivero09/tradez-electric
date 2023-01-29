import React, { Component } from 'react';
import './App.css';
import './components/Nav';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/home';
import About from './components/About/about';
import Services from './components/Service/services';
import Contact from './components/Contact/contact';
import Nav from './components/Nav'
import Footer from './components/footer'

class App extends Component{
  render() {
    return(
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
    // return(
    //   <Switch>
    //     <App />
    //   </Switch>
    // );
  }
}

export default App;