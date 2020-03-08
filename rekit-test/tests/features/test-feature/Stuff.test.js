import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Stuff } from 'src/features/test-feature/Stuff';

describe('test-feature/Stuff', () => {
  it('renders node with correct class name', () => {
    const props = {
      testFeature: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Stuff {...props} />
    );

    expect(
      renderedComponent.find('.test-feature-stuff').node
    ).to.exist;
  });
});
