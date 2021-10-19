import React from 'react';

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

export default Points
