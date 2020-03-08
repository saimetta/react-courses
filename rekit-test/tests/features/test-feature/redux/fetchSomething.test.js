import { expect } from 'chai';

import {
  TEST_FEATURE_FETCH_SOMETHING,
} from 'src/features/test-feature/redux/constants';

import {
  fetchSomething,
  reducer,
} from 'src/features/test-feature/redux/fetchSomething';

describe('test-feature/redux/fetchSomething', () => {
  it('returns correct action by fetchSomething', () => {
    expect(fetchSomething()).to.have.property('type', TEST_FEATURE_FETCH_SOMETHING);
  });

  it('handles action type TEST_FEATURE_FETCH_SOMETHING correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: TEST_FEATURE_FETCH_SOMETHING }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
