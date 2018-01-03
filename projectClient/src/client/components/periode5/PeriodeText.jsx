import React, { Component } from "react";

module.exports = class PeriodeText extends Component {
  render() {
    return (
      <div>
        <h1>Callbacks and Promises ans Async Awaits Assignment - Periode 5 - Javascript</h1>
        <h2>
          Before you start, convince yourself that this exercise would be
          impossible to implement without a way to handle asynchronous behaviour
          (callbacks, promises, etc.).
        </h2>
        <h4>
          1.a) without callbacks or promises etc. there would be race conditions
          , meaning that we would not be able to control the order of the array
        </h4>
        {this.props.assignment !== '' ? <h2> 6 secure randoms created with {this.props.assignment}</h2> : ''}
      </div>
    );
  }
};
