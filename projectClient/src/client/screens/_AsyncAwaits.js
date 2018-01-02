import React, { Component } from "react";
import Axios from "axios";
import CreateBytes from '../components/createBytes'

module.exports = class _WithPromises extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: {
        title: "6 Secure Randoms with Async Awaits",
        AsyncedRandoms: []
      }
    }
  }

  componentDidMount() {
    let getBytes = async () => {
        try {
            CreateBytes.createBytes(64, (data) => {
                this.setState({result : {AsyncedRandoms : data}})
        })
     } catch(e) {
        alert('something went wrong: ' + e)
        }
    }
    getBytes()
}

  render() {
    return (
      <div>
        <h1>Callbacks and Promises Assignment - Periode 5 - Javascript</h1>
        <h2>1.c) {this.state.result.title}</h2>
        <pre>{JSON.stringify(this.state.result, null, 6)}</pre>
      </div>
    );
  }
};
