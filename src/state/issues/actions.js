export const FETCH_ISSUES = 'FETCH_ISSUES';

export const fetchIssues = url => {
  return {
    type: FETCH_ISSUES,
    url,
  };
};
