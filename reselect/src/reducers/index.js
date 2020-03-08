import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
import SelectedPostsReducer from './reducer_selected_posts';



const rootReducer = combineReducers({
  posts: PostsReducer,
  selected: SelectedPostsReducer
});

export default rootReducer;
