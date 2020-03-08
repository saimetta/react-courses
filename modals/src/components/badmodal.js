import React, { Component } from 'react';

export default class App extends Component {
  render () {
    return (
      <div className="modal">
        <p>Im a bad modal</p>
        <div>{this.props.children}</div>
      </div>
    )
  }
}
