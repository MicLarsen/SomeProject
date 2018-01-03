import React, { Component } from "react";
import PeriodeText from './PeriodeText'
import Axios from "axios";
import CreateBytes from '../createBytes'

module.exports = class _WithPromises extends Component {
  constructor(props) {
    super(props);
    this.state = {
        AsyncedRandoms: [],
      }
    }

  componentDidMount() {
    let getBytes = async () => {
        try {
            CreateBytes.createBytes(64, (data) => {
                this.setState({AsyncedRandoms : data})
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
       <pre>{JSON.stringify(this.state.AsyncedRandoms, null, 6)}</pre>
      </div>
    );
  }
};
