import React, { Component } from 'react'
import { BrowserRouter as Link } from 'react-router-dom'
import data from './people.json'

class SingleView extends Component {
  state = {
    name:'',
    lastname:'',
    email:'',
    number:'',
    address:'',
    image: ''
  }
  componentDidMount(){
      const user = data.find(
          person => person.id === this.props.match.params.id
      );
      this.setState({
          name: user.name.first,
          lastname: user.name.last,
          email: user.email,
          number:user.phone,
          address:user.location.city,
          address2:user.location.state,
          image:user.picture.medium
      })
  }
  
  
    render() {
        return(
            <div className="Singleview">
                <p><Link to="/">Back</Link></p>
                <img src={this.state.image} />
                <p>{this.state.name} {this.state.lastname}</p>
                <p>{this.state.email}</p>
                <p>{this.state.number}</p>
                <p>{this.state.address},{this.state.address2}</p>
            </div>
        )
        }
    }

export default SingleView