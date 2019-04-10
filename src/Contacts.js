import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import data from './people.json'

class Contacts extends Component {
    render(){
        return(
    
    <div className="contacts">
    <h1>My Peeps</h1>
    <nav>
        <ul>
          {
            data.map(person =>(
              <li><Link to={"/profile/" + person.id}><img src={person.picture.thumbnail} /> {person.name.first}  {person.name.last}</Link></li>
            ))
          }
        </ul>
      </nav>
    </div>
        )
        }
    }

export default Contacts