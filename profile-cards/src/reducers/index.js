import { combineReducers } from 'redux';
import ProfilesReducer from './profiles-reducer';

const rootReducer = combineReducers({
  profiles: ProfilesReducer
});

export default rootReducer;
