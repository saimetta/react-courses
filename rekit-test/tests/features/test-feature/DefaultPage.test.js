import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { DefaultPage } from 'src/features/test-feature/DefaultPage';

describe('test-feature/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      testFeature: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />
    );

    expect(
      renderedComponent.find('.test-feature-default-page').node
    ).to.exist;
  });
});
