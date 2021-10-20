import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import pointingPokerReducer from './features/pointing-poker/slice'
import websocketReducer from './features/websocket/slice'

import saga from './saga'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: {
    pointingPoker: pointingPokerReducer,
    websocket: websocketReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(saga)

export { store }
