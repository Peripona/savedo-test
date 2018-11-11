import React from 'react';
import { shallow } from 'enzyme';
import Issues from './Issues';

describe('<Issues />', () => {
  const build = passedProps => {
    const defaultProps = {};
    return shallow(<Issues {...defaultProps} {...passedProps} />);
  };

  it('should render', () => {
    const component = build();
    expect(component).toMatchSnapshot();
  });
});
