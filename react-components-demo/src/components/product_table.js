import React, { Component } from 'react';
import CategoryRow from './category_row';
import ProductRow from './product_row';

export default class ProductTable extends Component {

  constructor(props) {
    super(props);
  }

  renderCategory(name) {
    return <CategoryRow category={name}/>;
  }

  renderProduct(product) {
    return <ProductRow product={product}/>;
  }

  renderItems() {
    const { products } = this.props;
    let currentCateg = false;
    const rows = [
    ];

    var mapped = products.map((item) => {

      if (item.name.toLowerCase().indexOf(this.props.search.toLowerCase()) === -1 || (this.props.filter && !item.stocked)) {
        return;
      }else {
        if(item.category != currentCateg) {
          rows.push(this.renderCategory(item.category));
          currentCateg = item.category;
        }
        //Render only items that matches with the search
        rows.push(this.renderProduct(item));
        return item;
      }
    });
    return rows;
  }

  render() {
    return <ul className="list-group">
      {this.renderItems()}
    </ul>
  }
}
