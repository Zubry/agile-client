import React, { useState } from "react"
import List from '@mui/material/List'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import Theme from './theme'

import Vote from './components/Vote'

function App() {
  const [vote, setVote] = useState(0.5)

  return (
    <Theme>
      <CssBaseline />
      <Box p={2}>
        <Typography paragraph variant="h2">Testing</Typography>
        <Card>
          <CardContent>
            <Button onClick={() => setVote(vote => vote + 1)}>Change vote</Button>
          </CardContent>
        </Card>
      </Box>
      <Box p={2}>
        <Typography paragraph variant="h2">Vote display</Typography>
        <Card>
          <CardContent>
            <List>
              <Vote name="James" value={vote} isRevealed/>
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
