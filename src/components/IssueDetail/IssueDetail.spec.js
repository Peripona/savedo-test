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
      selected: {
        html_url: 'some_url',
        state: 'open',
        labels: [],
        number: 123,
        title: 'Some Title',
        comments: 1,
        user: {
          login: 'savedo',
          avatar_url: 'some-url',
        },
        created_at: 'xx.yy.zzzz',
        body: 'comment',
      },
      data: [
        {
          id: 1234,
          user: {
            login: 'savedo-commentor',
            avatar_url: 'some-url',
          },
          created_at: 'xx.yy.zzzz',
          body: 'some comment',
        },
      ],
    };
    return shallow(<IssueDetail {...defaultProps} {...passedProps} />);
  };

  it('should render', () => {
    const dispatch = jest.fn();
    const component = build({ dispatch });
    expect(component).toMatchSnapshot();
  });
});
