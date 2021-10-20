import { nanoid } from 'nanoid/non-secure'

export const CONNECT = 'websocket/connect';
export const CONNECTED = 'websocket/connected';

export const DISCONNECT = 'websocket/disconnect';
export const DISCONNECTED = 'websocket/disconnected';

export const RECEIVED = 'websocket/received'
export const MESSAGE = 'websocket/message'
export const SEND = 'websocket/send'

export const connect = () => ({ type: CONNECT })
export const connected = () => ({ type: CONNECTED })
export const disconnected = () => ({ type: DISCONNECTED })
export const message = (id, payload) => ({ type: id + ":" + MESSAGE, payload: payload })
export const received = (id, payload) => ({ type: RECEIVED, id: id, payload: payload })
export const send = (...payload) => {
  return {
    type: SEND,
    id: nanoid(6),
    payload: payload
  }
}
