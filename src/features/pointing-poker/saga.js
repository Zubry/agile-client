import { take, put, call, race } from 'redux-saga/effects'

import * as pointingPoker from './actions'
import * as websocket from '../websocket/actions'

import { setId } from './slice'

export function* start() {
  yield take(pointingPoker.START)

  const { id } = yield put(websocket.send('start', 'pointing_poker'))

  const { payload } = yield take(`${id}:${websocket.MESSAGE}`)

  yield put(setId(payload))

  return true
}

export function* join() {
  const { room } = yield take(pointingPoker.JOIN)

  const { id } = yield put(websocket.send('join', room, 'testuser'))

  const { payload } = yield take(`${id}:${websocket.MESSAGE}`)

  return true
}

export function* pointingPokerSaga() {
  const { startRoom, joinRoom } = yield race({
    startRoom: call(start),
    joinRoom: call(join)
  })
  console.log(startRoom)

  if (startRoom) {
    yield call(join)
  }
}
