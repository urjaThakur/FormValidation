import React, { Component } from 'react';
import "../App.css"
class Display extends Component {
  componentDidMount() { console.log(this.props) }
  render() {
    const { firstname, lastname, phone, email, height, weight, age } = this.props.location.state;
    return (
      <div className="card m-5 mx-auto">
        <div className="card-header bg-dark">
          <h1 className="card-title text-white">Info</h1>
        </div>
        <div className="card-body">
          <p className="lead">Firstname: {firstname}</p>
          <p className="lead">Lastname: {lastname}</p>
          <p className="lead">Phone: {phone}</p>
          <p className="lead">Email: {email}</p>
          <p className="lead">Height: {height}</p>
          <p className="lead">Weight: {weight}</p>
          <p className="lead">Age: {age}</p>
        </div>
      </div>
    )
  }
}

export default Display
