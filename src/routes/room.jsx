import React, { useEffect } from 'react'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'

import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

import SetName from '../components/SetName'
import Votes from '../components/Votes'
import { setId } from '../features/pointing-poker/slice'

const Room = () => {
  const { room: roomParam } = useParams()
  const dispatch = useDispatch()
  const isActive = useSelector(state => !!state.pointingPoker.game)
  const isConnected = useSelector(state => state.websocket.connected)

  useEffect(() => {
    if (roomParam) {
      dispatch(setId(roomParam))
    }
  }, [roomParam])

  if (!isConnected) {
    return (
      <Card>
        <CardContent>
          <Skeleton />
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardContent>
        {!isActive && (
          <Stack direction="row" spacing={1} justifyContent="center" alignItems="center"><SetName /></Stack>
        )}
        {
          isActive && (
            <Votes />
          )
        }
      </CardContent>
    </Card>
  )
}

export default Room
