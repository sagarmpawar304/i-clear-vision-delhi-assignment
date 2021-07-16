import { call, takeEvery, put, takeLatest } from 'redux-saga/effects';

import axios from '../apis/base_api';
import moviesActions from '../constants/moviesActions';

const API_KEY = process.env.REACT_APP_API_KEY;

// 'https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=1',

const getPopularMovies = async ({ page = 1 }) => {
  const response = await axios.get(`/popular?api_key=${API_KEY}&language=en-US&page=${page}`);
  // console.log({ response });
  return response.data.results;
};

const getSingleMovie = async ({movie_id}) => {
  const response = await axios.get(`/${movie_id}?api_key=${API_KEY}&language=en-US`);
  return response.data;
};

function* fetchMovies({ payload }) {
  try {
    const response = yield call(getPopularMovies, payload);
    yield put({ type: moviesActions.SUCCESS_GET_MOVIES, payload: response });
  } catch (err) {
    yield put({ type: moviesActions.FAILURE_GET_MOVIES, payload: err.status_message });
  }
}

function* fetchSingleMovie({ payload }) {
  try {
    const response = yield call(getSingleMovie, payload);
    yield put({ type: moviesActions.SUCCESS_GET_MOVIE, payload: response });
  } catch (err) {
    yield put({ type: moviesActions.FAILURE_GET_MOVIE, payload: err.response.data.status_message });
  }
}

function* moviesSaga() {
  yield takeEvery(moviesActions.REQUEST_GET_MOVIES, fetchMovies);
  yield takeLatest(moviesActions.REQUEST_GET_MOVIE, fetchSingleMovie);
}

export default moviesSaga;
