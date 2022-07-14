import axios from 'axios'

const api = axios.create({
  baseURL: 'http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/',
});

export default api