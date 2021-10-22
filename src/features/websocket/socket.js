const socketURL = process.env.NODE_ENV !== 'production'
  ? 'ws://localhost:4040/ws'
  : 'ws://agile.gigalixirapp.com/ws'

const connect = () => {
  return new WebSocket(socketURL)
}

const send = (socket, id, args) => {
  socket.send(`${id}:${args.join(':')}`)

  return id
}

export { connect, send }
