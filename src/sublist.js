import React, { Component } from "react";
import Header from "./Header";
import "./sublist.css";
import { Link } from "react-router-dom";

class Sublist extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      name: "",
      phone: ""
    };
  }
  render() {
    return (
      <div>
        <Header headName="Subscribers List" />
        <div className="mainpadding">
          <Link to="/add">
            <button type="button">Add New</button>
          </Link>
          <div>
            <div className="grid-format">
              <span>Name </span>
              <span>Phone Number</span>
            </div>
            {this.props.customsubscriberslist.map(sub => {
              return (
                <div id={sub.id} className="grid-format">
                  <span id={sub.id}>{sub.name}</span>
                  <span id={sub.id}>{sub.phone}</span>
                  {/* <button id={sub.id} type="button">
                    Delete
                  </button> */}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Sublist;
