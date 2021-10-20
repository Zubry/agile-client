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
      const i = message.data.indexOf(':');
      const [id, payload] = [message.data.slice(0,i), message.data.slice(i+1)];

      emitter(actions.received(id, payload))
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

function* sendMessages(socket) {
  while (true) {
    const { id, payload } = yield take(actions.SEND)
  
    send(socket, id, payload)
  }
}

function* receiveMessages() {
  while (true) {
    const { id, payload } = yield take(actions.RECEIVED)

    yield put(actions.message(id, payload))
  }
}

export function* websocket() {
  yield take(actions.CONNECT)

  const socket = connect()
  yield fork(responseHandler, socket)

  yield take(actions.CONNECTED)
  yield put(setConnected(true))

  yield fork(sendMessages, socket)
  yield fork(receiveMessages)
}
