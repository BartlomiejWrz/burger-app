import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://burger-app-f9027.firebaseio.com/'
});

export default instance;