import React, { useEffect } from 'react'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

import { setId } from '../features/pointing-poker/slice'
import { join } from '../features/pointing-poker/actions'

const Room = () => {
  const { room: roomParam } = useParams()
  const dispatch = useDispatch()
  const room = useSelector(state => state.pointingPoker.id)
  const isConnected = useSelector(state => state.websocket.connected)

  useEffect(() => {
    if (roomParam) {
      dispatch(setId(roomParam))
    }
  }, [roomParam])

  useEffect(() => {
    if (room && isConnected) {
      dispatch(join(room))
    }
  }, [room, isConnected])

  return (
    <Card>
      <CardContent>
        {room}
      </CardContent>
    </Card>
  )
}

export default Room
