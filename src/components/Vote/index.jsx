import React from 'react';

import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import Zoom from '@mui/material/Zoom';

const Points = ({ value, isRevealed }) => {
  if (!isRevealed) {
    if (value != null) {
      return (
        <Zoom in>
          <CheckCircleOutlineIcon color="success" />
        </Zoom>
      )
    } else {
      return (
        <Zoom in>
          <HourglassBottomIcon color="warning" />
        </Zoom>
      )
    }
  } else {
    if (value != null) {
      return (
        <Zoom in>
          <Typography color="primary">{ value }</Typography>
        </Zoom>
      )
    } else {
      return (
        <Zoom in>
          <Typography>--</Typography>
        </Zoom>
      )
    }
  }
}

const Vote = ({ name, value, isRevealed }) => {
  return (
    <ListItem>
      <ListItemAvatar sx={{ width: 4, minWidth: 0, marginRight: 2 }}>
        <Avatar variant="rounded" sx={{ width: 4, bgcolor: 'secondary.main' }}>&nbsp;</Avatar>
      </ListItemAvatar>
      <ListItemText>{ name }</ListItemText>
      <ListItemSecondaryAction>
        <ListItemText edge="end"><Points value={value} isRevealed={isRevealed} /></ListItemText>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

export default Vote
