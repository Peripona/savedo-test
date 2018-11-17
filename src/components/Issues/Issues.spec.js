import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Issues, IssuesConnected } from './Issues';

describe('<Issues />', () => {
  const defaultProps = {
    fetching: false,
    data: [
      {
        url: 'https://api.github.com/repos/facebook/react/issues/14256',
        repository_url: 'https://api.github.com/repos/facebook/react',
        labels_url:
          'https://api.github.com/repos/facebook/react/issues/14256/labels{/name}',
        comments_url:
          'https://api.github.com/repos/facebook/react/issues/14256/comments',
        events_url:
          'https://api.github.com/repos/facebook/react/issues/14256/events',
        html_url: 'https://github.com/facebook/react/issues/14256',
        id: 381786822,
        node_id: 'MDU6SXNzdWUzODE3ODY4MjI=',
        number: 14256,
        title: 'Implement Display Locking integration',
        user: {
          login: 'chrishtr',
          id: 3453258,
          node_id: 'MDQ6VXNlcjM0NTMyNTg=',
          avatar_url: 'https://avatars3.githubusercontent.com/u/3453258?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/chrishtr',
          html_url: 'https://github.com/chrishtr',
          followers_url: 'https://api.github.com/users/chrishtr/followers',
          following_url:
            'https://api.github.com/users/chrishtr/following{/other_user}',
          gists_url: 'https://api.github.com/users/chrishtr/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/chrishtr/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/chrishtr/subscriptions',
          organizations_url: 'https://api.github.com/users/chrishtr/orgs',
          repos_url: 'https://api.github.com/users/chrishtr/repos',
          events_url: 'https://api.github.com/users/chrishtr/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/chrishtr/received_events',
          type: 'User',
          site_admin: false,
        },
        labels: [],
        state: 'open',
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 0,
        created_at: '2018-11-16T22:43:52Z',
        updated_at: '2018-11-16T22:43:52Z',
        closed_at: null,
        author_association: 'NONE',
        body:
          'Display Locking (https://github.com/chrishtr/display-locking) is a proposed new web standard that allows scheduling and asynchronous control of the browser rendering loop.\r\n\r\nAn implementation in Chrome is in progress, tracked at http://crbug.com/882663. @vmpstr is implementing.\r\n\r\nThis issue is to tracks implementing Display Locking integration in React behind a flag, and iterating\r\non a demo.\r\n\r\nI think the next most clear steps are:\r\n1. Get the Display Locking implementation into a state that can be used in a demo (@vmpstr)\r\n2. Add code to React to support Display Locking\r\n3. Build a demo that demonstrates the integration\r\n\r\nWe can use these to validate the design, debug it, and measure performance on a common example.\r\n',
      },
      {
        url: 'https://api.github.com/repos/facebook/react/issues/14213',
        repository_url: 'https://api.github.com/repos/facebook/react',
        labels_url:
          'https://api.github.com/repos/facebook/react/issues/14213/labels{/name}',
        comments_url:
          'https://api.github.com/repos/facebook/react/issues/14213/comments',
        events_url:
          'https://api.github.com/repos/facebook/react/issues/14213/events',
        html_url: 'https://github.com/facebook/react/issues/14213',
        id: 380109743,
        node_id: 'MDU6SXNzdWUzODAxMDk3NDM=',
        number: 14213,
        title:
          'Textarea loses focus after inserting paired punctuation with Chinese IME',
        user: {
          login: 'LastShadowNeo',
          id: 44996396,
          node_id: 'MDQ6VXNlcjQ0OTk2Mzk2',
          avatar_url: 'https://avatars2.githubusercontent.com/u/44996396?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/LastShadowNeo',
          html_url: 'https://github.com/LastShadowNeo',
          followers_url: 'https://api.github.com/users/LastShadowNeo/followers',
          following_url:
            'https://api.github.com/users/LastShadowNeo/following{/other_user}',
          gists_url:
            'https://api.github.com/users/LastShadowNeo/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/LastShadowNeo/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/LastShadowNeo/subscriptions',
          organizations_url: 'https://api.github.com/users/LastShadowNeo/orgs',
          repos_url: 'https://api.github.com/users/LastShadowNeo/repos',
          events_url:
            'https://api.github.com/users/LastShadowNeo/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/LastShadowNeo/received_events',
          type: 'User',
          site_admin: false,
        },
        labels: [
          {
            id: 127893911,
            node_id: 'MDU6TGFiZWwxMjc4OTM5MTE=',
            url:
              'https://api.github.com/repos/facebook/react/labels/Component:%20DOM',
            name: 'Component: DOM',
            color: 'fef2c0',
            default: false,
          },
          {
            id: 40929151,
            node_id: 'MDU6TGFiZWw0MDkyOTE1MQ==',
            url:
              'https://api.github.com/repos/facebook/react/labels/Type:%20Bug',
            name: 'Type: Bug',
            color: 'b60205',
            default: false,
          },
        ],
        state: 'open',
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 2,
        created_at: '2018-11-13T08:26:59Z',
        updated_at: '2018-11-15T03:06:55Z',
        closed_at: null,
        author_association: 'NONE',
        body:
          '<!--\r\n  Note: if the issue is about documentation or the website, please file it at:\r\n  https://github.com/reactjs/reactjs.org/issues/new\r\n-->\r\n\r\n**Do you want to request a *feature* or report a *bug*?**\r\nbug\r\n\r\n**What is the current behavior?**\r\nTextarea lose focus after insert paired punctuation by "Chinese-Pinyin 10 key" input source on IOS safari. And then textarea can\'t be focused when I click it. But after other element has been focused, the textarea could be focused again.\r\n\r\n**If the current behavior is a bug, please provide the steps to reproduce and if possible a minimal demo of the problem. Your bug will get fixed much faster if we can run your code and it doesn\'t have dependencies other than React. Paste the link to your JSFiddle (https://jsfiddle.net/Luktwrdm/) or CodeSandbox (https://codesandbox.io/s/new) example below:**\r\n\r\n[CodeSandbox Demo](https://codesandbox.io/s/7w23wpl0q1)\r\n\r\n[steps(youtube video)](https://youtu.be/4PJ2WVD83Eg)\r\n\r\n**What is the expected behavior?**\r\njust work fine!\r\n\r\n**Which versions of React, and which browser / OS are affected by this issue? Did this work in previous versions of React?**\r\nversions of React: 16+\r\nOS: IOS\r\nbrowser: safari\r\n\r\n\r\n\r\n',
      },
    ],
  };
  const build = passedProps => {
    return shallow(<Issues {...defaultProps} {...passedProps} />);
  };

  it('should render', () => {
    const dispatch = jest.fn();
    const component = build({ dispatch });
    expect(component).toMatchSnapshot();
  });

  it('should connect', () => {
    const mockStore = configureStore();

    const store = mockStore({
      issues: {
        ...defaultProps,
      },
    });
    const component = shallow(<IssuesConnected store={store} />);
    expect(component).toMatchSnapshot();
  });
});
