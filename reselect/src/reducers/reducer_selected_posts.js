import { SELECT_POST,SELECTED_POSTS } from '../actions/index';

const INITIAL_STATE = { selectedPostIds: [] };

export default function (state= INITIAL_STATE, action) {
  switch(action.type) {
    case SELECT_POST:
      return {
        ...state,
       selectedPostIds: [parseInt(action.payload), ...state.selectedPostIds]
      };
    case SELECTED_POSTS:
      return {
        ...state,
       selectedPostIds: action.payload
      };
    default:
      return state;
  }
};
