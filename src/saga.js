import { all } from 'redux-saga/effects'

import { websocket } from './features/websocket/saga'
import { pointingPokerSaga } from './features/pointing-poker/saga'

export default function* rootSaga() {
  yield all([
    websocket(),
    pointingPokerSaga()
  ])
}
