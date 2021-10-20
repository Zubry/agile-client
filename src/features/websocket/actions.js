import { nanoid } from 'nanoid/non-secure'

export const CONNECT = 'websocket/connect';
export const CONNECTED = 'websocket/connected';

export const DISCONNECT = 'websocket/disconnect';
export const DISCONNECTED = 'websocket/disconnected';

export const MESSAGE = 'websocket/message'
export const SEND = 'websocket/send'

export const connect = () => ({ type: CONNECT })
export const disconnected = () => ({ type: DISCONNECTED })
export const message = (id, payload) => ({ type: id + ":" + MESSAGE, payload: payload })
export const send = (...payload) => {
  return {
    type: SEND,
    id: nanoid(6),
    payload: payload
  }
}
