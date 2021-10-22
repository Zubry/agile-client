import React from 'react'

import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

import { useSelector, useDispatch } from 'react-redux'

import { clearVotes, revealVotes, unrevealVotes } from '../../features/pointing-poker/actions'

const VoteManagement = () => {
  const dispatch = useDispatch()
  const isRevealed = useSelector(state => state.pointingPoker.state.revealed)

  return (
    <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" spacing={2} sx={{ flexWrap: 'wrap' }}>
      <Box m={1}>
        <Button color="primary" variant="contained" onClick={() => dispatch(clearVotes())}>Clear votes</Button>
      </Box>
      <Box m={1}>
        {!isRevealed && <Button color="primary" variant="contained" onClick={() => dispatch(revealVotes())}>Reveal votes</Button>}
        {isRevealed && <Button color="primary" variant="contained" onClick={() => dispatch(unrevealVotes())}>Hide votes</Button>}
      </Box>
    </Box>
  )
}

export default VoteManagement
