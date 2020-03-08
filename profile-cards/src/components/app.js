import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Profile Cards Example</h1>
        <Link to={"/profiles"}>Profiles</Link>
      </div>
    );
  }
}
