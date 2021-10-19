import React from 'react';

import Typography from '@mui/material/Typography';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';

const Points = ({ value, isRevealed }) => {
  if (!isRevealed) {
    if (value != null) {
      return (
        <CheckCircleOutlineIcon color="success" />
      )
    } else {
      return (
        <HourglassBottomIcon color="warning" />
      )
    }
  } else {
    if (value != null) {
      return (
        <Typography color="primary">{ value }</Typography>
      )
    } else {
      return (
        <Typography>--</Typography>
      )
    }
  }
}

export default Points
