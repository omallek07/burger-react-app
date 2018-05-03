import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-app-4abd8.firebaseio.com/'
});

export default instance;
