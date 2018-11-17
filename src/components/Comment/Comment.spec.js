import React from 'react';
import Comment from './Comment';
import { shallow } from 'enzyme';

describe('<Comment />', () => {
  it('Should render comment component', () => {
    const props = {
      user: {
        avatar_url: 'some_url',
        login: 'savedo',
      },
      created_at: 'xx.yy.zzzz',
      body: '123 1233',
    };
    const component = shallow(<Comment data={props} />);
    expect(component).toMatchSnapshot();
  });
});
