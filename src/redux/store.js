import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReduucer from './rootReducer';
import { rootSaga } from './root-saga';
import createSaga from 'redux-saga';


const sagaMiddleware = createSaga();

const middlewares = [sagaMiddleware];



if (process.env.NODE_ENV === "development") {
    middlewares.push(logger);
}
export const store = createStore(rootReduucer, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);



