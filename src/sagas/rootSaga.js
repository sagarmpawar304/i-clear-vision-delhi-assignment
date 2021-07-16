import { all } from 'redux-saga/effects';

import moviesSaga from './moviesSaga';

function* rootSaga() {
  yield all([moviesSaga()]);
}

export default rootSaga;
