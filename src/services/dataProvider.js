import jsonServerProvider from "ra-data-json-server";
import { fetchUtils } from 'react-admin';

const fetchJson = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
  }
  // add your own headers here
  options.headers.set('X-Custom-Header', 'foobar');
  return fetchUtils.fetchJson(url, options);
};

export const dataProvider = jsonServerProvider(
  `https://jsonplaceholder.typicode.com`,
  fetchJson
);
