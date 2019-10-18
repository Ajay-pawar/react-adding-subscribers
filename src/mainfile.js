import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Sublist from "./sublist";
import Addsubs from "./addsubspage";

class Mainfile extends Component {
  constructor() {
    super();
    this.state = {
      subscriberslist: [
        {
          id: 0,
          name: "Subscriber 1",
          phone: 7188452194
        },
        {
          id: 1,
          name: "Subscriber 2",
          phone: 2017391425
        }
      ]
    };
  }

  addsubs = newSub => {
    let newsubscribersList = this.state.subscriberslist;
    if (newsubscribersList.length > 0) {
      newSub.id = newsubscribersList[newsubscribersList.length - 1].id + 1;
    } else {
      newSub.id = 1;
    }
    newsubscribersList.push(newSub);
    this.setState({ subscriberslist: newsubscribersList });

    //console.log(this.state.subscribersList);
  };
  render() {
    return (
      <div>
        <Router>
          <Route
            exact
            path="/"
            render={() => (
              <Sublist customsubscriberslist={this.state.subscriberslist} />
            )}
          />
          <Route
            exact
            path="/add"
            render={() => <Addsubs addsubs={this.addsubs} />}
          />
        </Router>
      </div>
    );
  }
}

export default Mainfile;
