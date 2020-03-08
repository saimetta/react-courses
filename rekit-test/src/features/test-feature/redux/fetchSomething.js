import {
  TEST_FEATURE_FETCH_SOMETHING,
} from './constants';

export function fetchSomething() {
  return {
    type: TEST_FEATURE_FETCH_SOMETHING,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case TEST_FEATURE_FETCH_SOMETHING:
      return {
        ...state,
      };

    default:
      return state;
  }
}
