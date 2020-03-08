import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts, selectPost } from '../actions/index';

class AllPosts extends Component {

  componentWillMount() {
    this.props.fetchPosts();
  }

  selectPost(event) {
    this.props.selectPost(event.currentTarget.value);
  }

  renderPosts () {
    return this.props.posts.map( post => {
        return (
          <li id="{post.id}" className="list-group-item row">
            <input  className="col-md-1" type="checkbox" name={post.title} value={post.id} onClick={this.selectPost.bind(this)}/>
            <span className="col-md-2">{post.title}</span>
            <span className="col-md-2">({post.categories})</span>
          </li>
        );
      }
    );
  }

  render () {
    return (
      <div className="mt-4">
          <h3>All posts</h3>
          <ul className="list-group">
            {this.renderPosts()}
          </ul>
      </div>
    );

  };
}

function mapStateToProps(state) {
  return { posts: state.posts.all };
}

export default connect(mapStateToProps, { fetchPosts, selectPost })(AllPosts);
