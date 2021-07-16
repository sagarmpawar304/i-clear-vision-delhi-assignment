import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import rootReducers from '../reducers/rootReducer';
import rootsaga from '../sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducers,
  middleware: [...getDefaultMiddleware(), sagaMiddleware],
  devTools: () => {
    if (process.env.NODE_ENV === 'development') {
      return true;
    }
    return false;
  },
});

sagaMiddleware.run(rootsaga);
