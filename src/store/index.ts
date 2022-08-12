import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import root from './root'
import saga from './saga'

const sagaMiddleware = createSagaMiddleware()

const middleware = applyMiddleware(sagaMiddleware)

const store = createStore(root, compose(middleware))

sagaMiddleware.run(saga)

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
