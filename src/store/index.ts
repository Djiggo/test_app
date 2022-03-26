import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'

import {rootSaga} from './rootSaga';
import {rootState} from './reducer';


const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootState(), {}, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga)
