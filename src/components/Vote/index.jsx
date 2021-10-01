import React from 'react';

import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

const Vote = ({ name, value }) => {
  return (
    <ListItem>
      <ListItemAvatar sx={{ width: 4, minWidth: 0, marginRight: 2 }}>
        <Avatar variant="rounded" sx={{ width: 4, bgcolor: 'secondary.main' }}>&nbsp;</Avatar>
      </ListItemAvatar>
      <ListItemText>{ name }</ListItemText>
      <ListItemSecondaryAction>
        <ListItemText edge="end">{ value }</ListItemText>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

export default Vote
