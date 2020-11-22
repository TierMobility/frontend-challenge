import axios from 'axios';

const {
    REACT_APP_BITLY_AUTORIZATION_TOKEN,
    REACT_APP_SHORTEN_ENDPOINT,
} = process.env;

axios.defaults.baseURL = REACT_APP_SHORTEN_ENDPOINT;
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.post['Access-Control-Allow-Headers'] = 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With';
axios.defaults.headers.post['Access-Control-Allow-Methods'] = 'DELETE, POST, GET, OPTIONS';
// eslint-disable-next-line dot-notation
axios.defaults.headers.post['Authorization'] = `Bearer {${REACT_APP_BITLY_AUTORIZATION_TOKEN}}`;
axios.defaults.headers.post['Content-Type'] = 'application/json';

export default axios;
