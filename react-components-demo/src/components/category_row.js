import React, { Component } from 'react';

export default class CategoryRow extends Component {
  render() {
    return <li className="list-group-item" key={this.props.category}>
            <h3>{this.props.category}</h3>
          </li>;
  }
}
