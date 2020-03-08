//Reselect Selector
//Takes a list of post and post ids and picks out the selected posts
import { createSelector } from 'reselect';
import _ from 'lodash';

//Create select function to pick up the pieces of state we need for the calculation
const postSelector = state => state.posts.all;
const selectedPostSelector = state => state.selected.selectedPostIds;



const getPost = (posts,selectedPostIds) => {

  const selectedPosts = _.filter(posts,
    post =>  _.contains(selectedPostIds,post.id)
  );
  return selectedPosts;
};


export default createSelector(
  postSelector,
  selectedPostSelector,
  getPost //last argument is the fcuntion that has the select function, the others picks the state
);
