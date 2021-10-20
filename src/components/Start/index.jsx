import React from 'react'

import Button from '@mui/material/Button'
import { useDispatch } from 'react-redux'

import * as pointingPoker from '../../features/pointing-poker/actions'

const Index = () => {
  const dispatch = useDispatch()

  const handleStart = () => dispatch(pointingPoker.start())

  return (
    <Button variant="contained" onClick={handleStart}>Start</Button>
  )
}

export default Index
