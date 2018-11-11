import React from 'react';
import { shallow } from 'enzyme';
import { IssuesNotConnected } from './Issues';

describe('<IssuesNotConnected />', () => {
  const build = passedProps => {
    const defaultProps = {};
    return shallow(<IssuesNotConnected {...defaultProps} {...passedProps} />);
  };

  it('should render', () => {
    const dispatch = jest.fn();
    const component = build({ dispatch });
    expect(component).toMatchSnapshot();
  });
});
