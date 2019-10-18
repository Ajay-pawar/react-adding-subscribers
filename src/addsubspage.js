import React, { Component } from "react";
import Header from "./Header";
import "./addsubs.css";
import { Link } from "react-router-dom";

class Addsubs extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      name: "",
      phone: ""
    };
  }

  inputHandler = e => {
    const newState = this.state;
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  };

  newsubscribers = e => {
    e.preventDefault();
    this.props.addsubs(this.state);
    this.setState(this.state = {
      id: 0,
      name: "",
      phone: ""
    });
    alert("Subscriber added successfully.")
  };

  render() {
    return (
      <div>
        <Header headName="Add Subscribers" />

        <div className="main-padding">
          <Link to="/">
            <button type="button"> Back</button>
          </Link>
          <br />
          <br />
          <form>
            <div className="grid-format">
              <span>Name:</span>
              <span>
                <input type="text" name="name" onChange={this.inputHandler} />
              </span>
            </div>
            <div className="grid-format">
              <span>Phone#</span>
              <span>
                <input type="number" name="phone" onChange={this.inputHandler} />
              </span>
            </div>
            <div>
              <h4>Subscribers to be added:</h4>
              <p className="grid-format">
                <span>Name: </span>
                <span>{this.state.name}</span>
              </p>
              <p className="grid-format">
                <span>Phone# </span>
                <span>{this.state.phone}</span>
              </p>
            </div>
            <br />
            <button type="button" onClick={this.newsubscribers}>
              Add
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Addsubs;
