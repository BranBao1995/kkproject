import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://kkimages-c8d5a.firebaseio.com/'
});

export default instance;