import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';
import { Link } from 'react-router';

class PostShow extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }

  onDeleteClick() {
    this.props.deletePost(this.props.params.id).then(() => {
      //blog post has been deleted
      //send user to index
      this.context.router.push('/');
    });
  }

  render() {
      const { post } = this.props;
      if (!post) {
        return <div>Loading...</div>;
      }else {
        return (
          <div>
            <button className="btn btn-danger pull-xs-right" onClick={this.onDeleteClick.bind(this)}>
              Delete Post
            </button>
            <Link to="/">Back to index</Link>
            <h3>{post.title}</h3>
            <h6>{post.categories}</h6>
            <p>{post.content}</p>
          </div>
        );
      }
  }
}

function mapStateToProps (state) {
  return { post: state.posts.post };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostShow);
