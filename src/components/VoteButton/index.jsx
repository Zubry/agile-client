import React from 'react'

import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

import { useDispatch } from 'react-redux'

import { vote } from '../../features/pointing-poker/actions'

const VoteButton = ({ value, ...props }) => {
  const dispatch = useDispatch()
  
  return (
    <Box m={1}>
      <Button color="primary" variant="contained" {...props} onClick={() => dispatch(vote(value))} />
    </Box>
  )
}

export default VoteButton
