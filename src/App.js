import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


import Home from './container/home/home';
import About from './container/About/About';
import Contact from './container/Contact/Contact';
import Countertops from './container/Countertops/Countertops';
import Gallery from './container/gallery/gallery';
import classes from './App.css';

class App extends Component {
  render() {
    return (
      <div className={classes.container}>
      
        
        <Switch>
          
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/countertops" component={Countertops} />
            <Route path="/gallery" component={Gallery} />
            
          
        </Switch>
      
       
      </div>
    );
  }
}

export default App;
