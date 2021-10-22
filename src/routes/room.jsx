import React, { useEffect } from 'react'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box';
import Zoom from '@mui/material/Zoom';

import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

import SetName from '../components/SetName'
import Votes from '../components/Votes'
import VoteButton from '../components/VoteButton'
import VoteManagement from '../components/VoteManagement'
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
              <Box>
                <VoteManagement />
                <Votes />
                <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" spacing={2} sx={{ flexWrap: 'wrap' }}>
                  <VoteButton value="0.5">0.5</VoteButton>
                  <VoteButton value="1">1</VoteButton>
                  <VoteButton value="2">2</VoteButton>
                  <VoteButton value="3">3</VoteButton>
                  <VoteButton value="5">5</VoteButton>
                  <VoteButton value="8">8</VoteButton>
                  <VoteButton value="13">13</VoteButton>
                  <VoteButton value="Break">Break</VoteButton>
                  <VoteButton value="?">?</VoteButton>
                </Box>
              </Box>
            )
          }
      </CardContent>
    </Card>
  )
}

export default Room
