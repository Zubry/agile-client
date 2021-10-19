import { nanoid } from 'nanoid/non-secure'

const connect = () => {
  return new WebSocket('ws://localhost:4040/ws')
}

const send = (socket, message) => {
  const id = nanoid(6)

  socket.send(`${id}:${message}`)
}

export { connect, send }
