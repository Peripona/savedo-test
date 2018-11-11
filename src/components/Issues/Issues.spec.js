import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import Issues, { IssuesNotConnected } from './Issues';

describe('<IssuesNotConnected />', () => {
  const build = passedProps => {
    const defaultProps = { loading: false };
    return shallow(<IssuesNotConnected {...defaultProps} {...passedProps} />);
  };

  it('should render', () => {
    const dispatch = jest.fn();
    const component = build({ dispatch });
    expect(component).toMatchSnapshot();
  });

  it('should connect', () => {
    const mockStore = configureStore();
    const props = {
      data: {},
      loading: false,
    };
    const store = mockStore({
      issues: props,
    });
    const component = shallow(<Issues store={store} {...props} />);
    expect(component).toMatchSnapshot();
  });
});
