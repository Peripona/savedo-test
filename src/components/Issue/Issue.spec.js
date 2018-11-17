import React from 'react';
import { shallow } from 'enzyme';
import Issue from './Issue';

describe('<Issue />', () => {
  const build = passedProps => {
    const defaultProps = {
      issue: {
        html_url: 'https://github.com/facebook/react/issues/14213',
        id: 380109743,
        number: 14213,
        title:
          'Textarea loses focus after inserting paired punctuation with Chinese IME',
        user: {
          login: 'LastShadowNeo',
          id: 44996396,
        },
        labels: [
          {
            id: 127893911,
            name: 'Component: DOM',
            color: 'fef2c0',
          },
          {
            id: 40929151,
            name: 'Type: Bug',
            color: 'b60205',
          },
        ],
        state: 'open',
        comments: 2,
        created_at: '2018-11-13T08:26:59Z',
      },
    };
    return shallow(<Issue {...defaultProps} {...passedProps} />);
  };

  it('should render', () => {
    const component = build();
    expect(component).toMatchSnapshot();
  });
});
