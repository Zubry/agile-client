import { take, put, call, fork } from 'redux-saga/effects'
import { eventChannel } from '@redux-saga/core'

import * as actions from './actions'
import { connect, send } from './socket'
import { setConnected } from './slice'

function socketChannel(socket) {
  return eventChannel(emitter => {
    socket.addEventListener('open', function () {
      emitter(actions.connected())
    })
    socket.addEventListener('message', function (message) {
      const [id, payload] = message.data.split(':', 2)
      emitter(actions.message(id, payload))
    })

    return () => {
      socket.close()
    }
  })
}

function* responseHandler(socket) {
  const channel = yield call(socketChannel, socket)

  while (true) {
    const response = yield take(channel)
    yield put(response)
  }
}

export function* websocket() {
  yield take(actions.CONNECT)

  const socket = connect()
  yield fork(responseHandler, socket)

  yield take(actions.CONNECTED)
  yield put(setConnected(true))

  while (true) {
    const { id, payload } = yield take(actions.SEND)

    send(socket, id, payload)

    const response = yield take(id + ':' + actions.MESSAGE)
    yield put(actions.message(id, response))
  }
}
