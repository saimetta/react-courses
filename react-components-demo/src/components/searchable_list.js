import React, { Component } from 'react';
import SearchBar from './search_bar';
import ProductTable from './product_table';

export default class SearchableList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      stockOnly: false
    };

    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleStockFilter = this.handleStockFilter.bind(this);
  }

  handleSearchInput(text) {
    this.setState({searchText: text});
  }

  handleStockFilter (filterValue) {
    this.setState({stockOnly: filterValue});
  }


  render() {
    const products = [
      {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
      {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
      {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
      {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
      {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
      {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
    ];

    return (
      <div>
        <h1>Products Table</h1>
        <SearchBar searchHandler={this.handleSearchInput}
                   filterHandler={this.handleStockFilter}
                   search={this.state.searchText}
                   filter={this.state.stockOnly}
         />
        <ProductTable products={products}
                      search={this.state.searchText}
                      filter={this.state.stockOnly}
        />
      </div>
    );
  }
}
