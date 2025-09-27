import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/'; // TODO: colocar em uma env
axios.defaults.headers.post['Content-Type'] = 'application/json';
