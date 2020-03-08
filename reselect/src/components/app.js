import React, { Component } from 'react';
import AllPosts from './list_all_posts';
import SelectedPostList from './selected_post_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1 className="mx-auto">Select Post Example</h1>
        <SelectedPostList/>
        <AllPosts/>
      </div>
    );
  }
}
