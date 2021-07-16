import axios from 'axios';

const base = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
});

export default base;
