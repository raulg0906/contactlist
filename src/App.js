import React, { Component } from 'react';
import './base.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Contacts from './Contacts'
import data from './people.json'
import SingleView from './SingleView'

class App extends Component{
  render(){
    return(
      <div>
        <Router>
        <div id ="page">
          <Route exact path="/" component ={Contacts} />
          <Route path= "/profile/:id" component ={SingleView} />
        </div>
        </Router>
      </div>
    )
  }
}


export default App;
