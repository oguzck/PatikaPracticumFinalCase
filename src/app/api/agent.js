import axios from 'axios';


axios.defaults.baseURL = 'https://swapi.dev/api';

const requests = {
  get: (url) => axios.get(url),
};

const Starships = {
    list: () => requests.get(`/starships`).then((response) => response.data.results),
  details: (id) => requests.get(`/starships/${id}`).then((response) => response.data),
  search: (name,page) => requests.get(`/starships/?search=${name}&page=${page}`).then((response) => response.data.results),
};
const agent = {
    Starships
}
export default agent
