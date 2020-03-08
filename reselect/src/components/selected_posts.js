import React, { Component } from 'react';
import { connect } from 'react-redux';


class SelectedPosts extends Component {

  renderPosts () {
    return this.props.selected.map( post => {
        return (
          <li className="list-group-item">
            <b>{post}</b>
          </li>
        );
    });
  }

  render () {
    if (!this.props.selected.length) {
      return (
        <div>
            <h3>Selected posts</h3>
            <p>Please select a post</p>
        </div>
      );
    }

    return (
      <div>
          <h3>Selected posts</h3>
            <ul className="list-group">
              {this.renderPosts()}
            </ul>
      </div>
    );
  };
}

function mapStateToProps(state) {
  return { selected: state.selected.selectedPostIds };
}

export default connect(mapStateToProps, {})(SelectedPosts);
