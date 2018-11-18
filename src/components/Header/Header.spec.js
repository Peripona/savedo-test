import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('<Header />', () => {
  const build = passedProps => {
    const defaultProps = {};
    return shallow(<Header {...defaultProps} {...passedProps} />);
  };

  it('should render', () => {
    const component = build();
    expect(component).toMatchSnapshot();
  });
});
