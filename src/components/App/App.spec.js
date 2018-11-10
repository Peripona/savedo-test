import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {
  const build = passedProps => {
    const defaultProps = {};
    return shallow(<App {...defaultProps} {...passedProps} />);
  };

  it('should render', () => {
    const component = build();
    expect(component).toMatchSnapshot();
  });
});
