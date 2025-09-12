const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://handbooky-dev-58c6ab86acfb.herokuapp.com'
  : 'http://localhost:5000';

export { API_BASE_URL };
