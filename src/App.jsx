import React from "react"
import List from '@mui/material/List'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Theme from './theme'

import Vote from './components/Vote'

function App() {
  return (
    <Theme>
      <CssBaseline />
      <Box p={2}>
        <Typography paragraph variant="h2">Vote display</Typography>
        <Card>
          <CardContent>
            <List>
              <Vote name="James" value="0.5" isRevealed/>
              <Vote name="James 1" isRevealed />
              <Vote name="James 1" />
              <Vote name="James 1" value="2" />
            </List>
          </CardContent>
        </Card>
      </Box>
    </Theme>
  )
}

export default App
