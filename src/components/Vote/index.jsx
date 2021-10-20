import React from 'react';

import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Zoom from '@mui/material/Zoom';
import Fade from '@mui/material/Fade';

import { useSelector } from 'react-redux'

import Points from './Points'

const Vote = ({ name }) => {
  const vote = useSelector(state => state.pointingPoker.state.votes[name])
  const isRevealed = true

  return (
    <Fade in key={name}>
      <div>
        <ListItem>
          <ListItemAvatar sx={{ width: 4, minWidth: 0, marginRight: 2 }}>
            <Avatar variant="rounded" sx={{ width: 4, bgcolor: 'secondary.main' }}>&nbsp;</Avatar>
          </ListItemAvatar>
          <ListItemText>{ name }</ListItemText>
          <ListItemSecondaryAction>
            <ListItemText edge="end">
              <Box sx={{ width: 36, textAlign: 'center' }}>
                <Zoom in key={`${vote}-${isRevealed}`}>
                  <div>
                    <Points value={vote} isRevealed={isRevealed} />
                  </div>
                </Zoom>
              </Box>
              </ListItemText>
          </ListItemSecondaryAction>
        </ListItem>
      </div>
    </Fade>
  )
}

export default Vote
