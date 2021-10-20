import { take, put, call, race, fork } from 'redux-saga/effects'

import * as pointingPoker from './actions'
import * as websocket from '../websocket/actions'

import { setId, update } from './slice'

export function* start() {
  yield take(pointingPoker.START)

  const { id } = yield put(websocket.send('start', 'pointing_poker'))

  const { payload } = yield take(`${id}:${websocket.MESSAGE}`)

  yield put(setId(payload))

  return true
}

export function* join() {
  const { room, name } = yield take(pointingPoker.JOIN)

  const { id } = yield put(websocket.send('join', room, name))

  const { payload } = yield take(`${id}:${websocket.MESSAGE}`)

  return true
}

function* handleUpdates() {
  while (true) {
    const { payload } = yield take(`update:${websocket.MESSAGE}`)

    yield put(update(JSON.parse(payload)))
  }
}

export function* pointingPokerSaga() {
  const { startRoom, joinRoom } = yield race({
    startRoom: call(start),
    joinRoom: call(join)
  })

  if (startRoom) {
    yield call(join)
  }

  yield fork(handleUpdates)
}
