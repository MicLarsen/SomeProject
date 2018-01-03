import React, { Component } from "react";
import Axios from "axios";
import CreateBytes from "../createBytes";
import CallApi from "../callApi";

module.exports = class Randoms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randoms: []
    };
    this.getRandoms = this.getRandoms.bind(this);
  }

  componentDidMount() {
    this.getRandoms(this.props.call);
  }

  getRandoms(call) {
    console.log("FFS");
    console.log(call);
    switch (call) {
      case "AsyncAwait":
        console.log("asyncing .....");
        let callIt = true;

        let AsyncCall = async () => {
          try {
            Axios.get("http://localhost:8000/api/securerandoms").then(
              data => this.setState({ randoms: data }),
              (callIt = false)
            );
          } catch (e) {
            console.log("something went wrong: " + e);
          }
        };
        if (callIt) {
          AsyncCall();
        } else {
          break;
        }

      case "Callback":
        console.log("callbacking .....");
        CreateBytes.createBytes(64, data => this.setState({ randoms: data }));
        break;

      case "Promises":
        console.log("promising .....");
        CallApi.callApi("securerandoms")
          .then(data => this.setState({ randoms: data.data }))
          .catch(err => console.log("There was an error:" + err));
        break;

      default:
        break;
    }
  }

  render() {
    return (
      <div>
        <h1>Callbacks and Promises Assignment - Periode 5 - Javascript</h1>
        <h2>
          Before you start, convince yourself that this exercise would be
          impossible to implement without a way to handle asynchronous behaviour
          (callbacks, promises, etc.).
        </h2>
        <h4>
          1.a) without callbacks or promises etc. there would be race conditions
          , meaning that we would not be able to control the order of the array
        </h4>
        <h2>1.b) 6 secure randoms created with {this.props.call}</h2>
        <pre>{JSON.stringify(this.state.randoms, null, 6)}</pre>
      </div>
    );
  }
};
