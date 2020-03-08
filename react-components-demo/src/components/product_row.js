import React, { Component } from 'react';


export default class ProductRow extends Component {
  render () {
    const clazz = !this.props.product.stocked?"product-name mx-1 text-danger":"product-name mx-1";
    return <li key={this.props.product.name} className="list-group-item">
        <span className={clazz}>{this.props.product.name}</span>
        <span className="product-price">{this.props.product.price}</span>
    </li>;
  }
}
