import { useEffect, useState } from 'react'

import { connect } from '../websocket'

export default (callback) => {
  const [socket, setSocket] = useState(null)

  useEffect(() => {
    const socket = connect()

    socket.addEventListener('open', e => {
      setSocket(socket)
    })

    callback(socket)

    return () => socket.close()
  }, [])

  return socket
}
