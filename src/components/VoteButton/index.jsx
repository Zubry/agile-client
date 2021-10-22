import React from 'react'

import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

import { useSelector, useDispatch } from 'react-redux'

import { vote } from '../../features/pointing-poker/actions'

const VoteButton = ({ value, ...props }) => {
  const dispatch = useDispatch()
  const isMyVote = useSelector(state => value === state.pointingPoker.state.votes[state.pointingPoker.user])

  return (
    <Box m={1}>
      <Button color="primary" variant="contained" {...props} onClick={() => dispatch(vote(value))} disabled={isMyVote} />
    </Box>
  )
}

export default VoteButton
