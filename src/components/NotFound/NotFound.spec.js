import React from 'react';
import { shallow } from 'enzyme';
import NotFound from './NotFound';

describe('<NotFound />', () => {
  const build = passedProps => {
    const defaultProps = { prop: 'NotFound' };
    return shallow(<NotFound {...defaultProps} {...passedProps} />);
  };

  it('should render', () => {
    const component = build();
    expect(component).toMatchSnapshot();
  });
});
