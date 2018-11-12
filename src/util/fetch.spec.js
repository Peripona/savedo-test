import { fetchGithubIssues } from './fetch';

const mockNativeFetch = (options = {}) => {
  window.fetch = jest.fn();
  window.fetch.mockReturnValue(
    Promise.resolve({
      status: options.status || 200,
      json: () => {
        return { defaultJsonResponse: true };
      },
      text: () => {
        return 'default text response';
      },
      headers: {
        get: key => {
          if (key === 'content-type') {
            return options.contentType || '';
          }
        },
      },
    }),
  );
  return window.fetch;
};

describe('fetchGithubIssues', () => {
  beforeEach(() => {
    window.fetch.mockReset && window.fetch.mockReset();
  });

  it('should call native fetch', async () => {
    const mockFetch = mockNativeFetch();
    await fetchGithubIssues({ url: 'someurl' });
    expect(mockFetch).toBeCalledWith('someurl');
  });

  it('should redirect to sso on 401', async () => {
    mockNativeFetch({ status: 401 });
    try {
      await fetchGithubIssues({ url: 'someurl' });
    } catch (e) {
      expect(e).toBe('Not authorized');
    }
  });

  it('should return text by default', async () => {
    mockNativeFetch();
    const result = await fetchGithubIssues({ url: 'someurl' });
    expect(result).toBe('default text response');
  });

  it('should return json when the response is json type', async () => {
    mockNativeFetch({ contentType: 'application/json' });
    const result = await fetchGithubIssues({ url: 'someurl' });
    expect(result).toEqual({ defaultJsonResponse: true });
  });
});
