import { take, put, call } from 'redux-saga/effects'

import * as pointingPoker from './actions'
import * as websocket from '../websocket/actions'

import { setId } from './slice'

export function* start() {
  yield take(pointingPoker.START)

  const { id } = yield put(websocket.send('start', 'pointing_poker'))

  const { payload } = yield take(`${id}:${websocket.MESSAGE}`)

  yield put(setId(payload))
}

export function* pointingPokerSaga() {
  yield call(start)
}
