import React from 'react';

import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Zoom from '@mui/material/Zoom';
import Fade from '@mui/material/Fade';

import Points from './Points'

const Vote = ({ name, value, isRevealed }) => {
  return (
    <Fade in>
      <div>
        <ListItem>
          <ListItemAvatar sx={{ width: 4, minWidth: 0, marginRight: 2 }}>
            <Avatar variant="rounded" sx={{ width: 4, bgcolor: 'secondary.main' }}>&nbsp;</Avatar>
          </ListItemAvatar>
          <ListItemText>{ name }</ListItemText>
          <ListItemSecondaryAction>
            <ListItemText edge="end">
              <Box width="24px" textAlign="center">
                <Zoom in>
                  <div>
                    <Points value={value} isRevealed={isRevealed} />
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
