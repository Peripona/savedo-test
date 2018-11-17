import React from 'react';
import { shallow } from 'enzyme';
import { IssueDetail } from './IssueDetail';

describe('<IssueDetail />', () => {
  const build = passedProps => {
    const defaultProps = {
      match: {
        params: {
          issueId: 123,
        },
      },
      selected: 123,
    };
    return shallow(<IssueDetail {...defaultProps} {...passedProps} />);
  };

  it('should render', () => {
    const component = build({ prop: 'Testing' });
    expect(component).toMatchSnapshot();
  });
});
