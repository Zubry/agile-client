import { nanoid } from 'nanoid/non-secure'

const connect = () => {
  return new WebSocket('ws://localhost:4040/ws')
}

const send = (socket, id, args) => {
  socket.send(`${id}:${args.join(':')}`)

  return id
}

export { connect, send }
