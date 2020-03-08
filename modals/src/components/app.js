import React, { Component } from 'react';
import BadModal from './badmodal';
import Modal from './modal';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="left">
          <h1>Hello</h1>
          <h2>Hello</h2>
          <h3>Hello</h3>
          <h4>Hello</h4>
        </div>
        <div className="right">
          <h1>Hello</h1>
          <h2>Hello</h2>
          <h3>Hello</h3>
          <h4>Hello</h4>
        </div>
        <div>
          <Modal>
            <h1>CACA</h1>
          </Modal>
        </div>
      </div>
    );
  }
}
