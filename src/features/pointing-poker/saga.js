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

  yield take(`${id}:${websocket.MESSAGE}`)

  return true
}

export function* vote() {
  const { vote } = yield take(pointingPoker.VOTE)

  const { id } = yield put(websocket.send('vote', vote))

  yield take(`${id}:${websocket.MESSAGE}`)

  return true
}

export function* clear_votes() {
  yield take(pointingPoker.CLEAR_VOTES)

  const { id } = yield put(websocket.send('clear_votes'))

  yield take(`${id}:${websocket.MESSAGE}`)

  return true
}

export function* reveal_votes() {
  yield take(pointingPoker.REVEAL_VOTES)

  const { id } = yield put(websocket.send('reveal_votes'))

  yield take(`${id}:${websocket.MESSAGE}`)

  return true
}

export function* unreveal_votes() {
  yield take(pointingPoker.UNREVEAL_VOTES)

  const { id } = yield put(websocket.send('unreveal_votes'))

  yield take(`${id}:${websocket.MESSAGE}`)

  return true
}

function* handleUpdates() {
  while (true) {
    const { payload } = yield take(`update:${websocket.MESSAGE}`)

    yield put(update(JSON.parse(payload)))
  }
}

export function* pointingPokerSaga() {
  const { startRoom } = yield race({
    startRoom: call(start),
    joinRoom: call(join)
  })

  if (startRoom) {
    yield call(join)
  }

  yield fork(handleUpdates)

  while (true) {
    yield race({
      vote: call(vote),
      clear_votes: call(clear_votes),
      reveal_votes: call(reveal_votes),
      unreveal_votes: call(unreveal_votes),
    })
  }
}
