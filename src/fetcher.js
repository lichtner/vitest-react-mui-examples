import fetch from 'cross-fetch';

const DEFAULT_OPTIONS = {
  credentials: 'include', // this has to be set to fetch request with credentials such as cookies like access_token
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

export default async function fetcher(url, options) {
  const api = 'https://jsonplaceholder.typicode.com';
  const res = await fetch(api + url, { ...DEFAULT_OPTIONS, ...options });

  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    const error = new Error('Request Error');
    error.json = await res.json();
    error.status = res.status;
    if (res.status !== 401) {
      // eslint-disable-next-line no-console
      console.log('Request Error', res.status, error.json);
    }
    throw error;
  }

  if (res.status === 204) {
    return null;
  }

  return res.json();
}
