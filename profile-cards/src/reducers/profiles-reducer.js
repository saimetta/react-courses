import _ from 'lodash';
import { FETCH_PROFILES } from '../actions';

export default function (state = null,action) {
  switch(action.type) {
    case FETCH_PROFILES:
      //converts an array to a map using the id as the key
      return _.mapKeys(action.payload.data.results,'email');
    default:
    return state;
  }
}
