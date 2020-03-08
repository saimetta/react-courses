import React, { Component } from 'react';

export default class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.onSearch = this.onSearch.bind(this);
    this.onFilter = this.onFilter.bind(this);
  }

  onSearch(e) {
    this.props.searchHandler(e.target.value);
  }

  onFilter(e) {
    this.props.filterHandler(e.target.checked);
  }

  render () {
    return <div className="search-bar">
      <p><input type="text" placeholder="Seach..."
                onChange={this.onSearch}
                value={this.props.searchText}
         />
      </p>
      <p><input
            type="checkbox"
            checked={this.props.filter}
            onChange={this.onFilter}
          /> Only show products with stock
      </p>
    </div>;
  }
}
