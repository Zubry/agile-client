import React from 'react'

import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

const VoteButton = (props) => {
  return (
    <Box m={1}>
      <Button color="primary" variant="contained" {...props} />
    </Box>
  )
}

export default VoteButton
