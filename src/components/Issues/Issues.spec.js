import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Issues, IssuesConnected } from './Issues';

describe('<Issues />', () => {
  const build = passedProps => {
    const defaultProps = {
      fetching: false,
      data: [
        {
          number: 2,
          id: 1,
        },
      ],
    };
    return shallow(<Issues {...defaultProps} {...passedProps} />);
  };

  it('should render', () => {
    const dispatch = jest.fn();
    const component = build({ dispatch });
    expect(component).toMatchSnapshot();
  });

  it('should connect', () => {
    const mockStore = configureStore();
    const props = {
      data: [
        {
          number: 2,
          id: 1,
        },
      ],
      loading: false,
    };
    const store = mockStore({
      issues: props,
    });
    const component = shallow(<IssuesConnected store={store} {...props} />);
    expect(component).toMatchSnapshot();
  });
});
