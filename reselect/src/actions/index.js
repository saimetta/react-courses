import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const SELECT_POST = 'SELECT_POST';


const ROUTE_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=tinosan';

export function fetchPosts()  {
  const request = axios.get(`${ROUTE_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function selectPost(post)  {
  return {
    type: SELECT_POST,
    payload: post
  };
}
