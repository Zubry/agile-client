import React, { useState } from 'react'

import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'

import { useHistory } from 'react-router'
import { useDispatch } from 'react-redux'

import { setId } from '../../features/pointing-poker/slice'

const Index = () => {
  const history = useHistory()
  const [roomId, setRoomId] = useState('')

  const dispatch = useDispatch()

  const handleJoin = (e) => {
    e.preventDefault()

    dispatch(setId(roomId))
    history.push(`/${roomId}`)
  }

  return (
    <form onSubmit={handleJoin}>
      <Stack direction="row" spacing={1} alignItems="center">
        <TextField onChange={e => setRoomId(e.target.value)} margin="dense" size="small"/>
        <Button disabled={roomId === ''} variant="contained" type="submit" style={{ marginTop: '4px' }}>Join</Button>
      </Stack>
    </form>
  )
}

export default Index
