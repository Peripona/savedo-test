import 'whatwg-fetch';

const getContentType = response => response.headers.get('content-type');

const isJson = contentType => contentType.indexOf('application/json') > -1;

export const fetchFromGithub = async params => {
  const { url } = params;
  const response = await fetch(url);
  if (response.status === 401) {
    return Promise.reject('Not authorized');
  }
  const contentType = getContentType(response);
  if (isJson(contentType)) {
    return response.json();
  }
  return response.text();
};
