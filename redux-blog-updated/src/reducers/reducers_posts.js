import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

export default function (state = {},action) {
  switch(action.type) {
    case DELETE_POST:
      //Remove the post from the state
      //Removes the key given from the map, returns a new state w/o the key
      return _.omit(state,action.payload);
    case FETCH_POST:
      //Key interpolation, adding a key: value (id and data) to an exsting map
      return {...state, [action.payload.data.id]: action.payload.data};
    case FETCH_POSTS:
      //converts an array to a map using the id as the key
      return _.mapKeys(action.payload.data,'id');
    default:
    return state;
  }
}
