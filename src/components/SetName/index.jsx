import React, { useState } from 'react'

import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'

import { useDispatch, useSelector } from 'react-redux'

import { join } from '../../features/pointing-poker/actions'

const SetName = () => {
  const [name, setName] = useState('')
  const room = useSelector(state => state.pointingPoker.id)

  const dispatch = useDispatch()

  const handleJoin = (e) => {
    e.preventDefault()

    dispatch(join(room, name))
  }

  return (
    <form onSubmit={handleJoin}>
      <Stack direction="row" spacing={1} alignItems="center">
        <TextField label="Your name" onChange={e => setName(e.target.value)} margin="dense" size="small"/>
        <Button disabled={name === ''} variant="contained" type="submit" style={{ marginTop: '4px' }}>Join</Button>
      </Stack>
    </form>
  )
}

export default SetName
