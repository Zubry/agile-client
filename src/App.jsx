import React, { useState } from "react"
import List from '@mui/material/List'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import Theme from './theme'

import Vote from './components/Vote'
import VoteButton from './components/VoteButton'

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
      <Box p={2}>
        <Typography paragraph variant="h2">Vote Buttons</Typography>
        <Card>
          <CardContent>
            <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" spacing={2} sx={{ flexWrap: 'wrap' }}>
              <VoteButton>0.5</VoteButton>
              <VoteButton>1</VoteButton>
              <VoteButton>2</VoteButton>
              <VoteButton>3</VoteButton>
              <VoteButton>5</VoteButton>
              <VoteButton>8</VoteButton>
              <VoteButton>13</VoteButton>
              <VoteButton>Break</VoteButton>
              <VoteButton>?</VoteButton>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Theme>
  )
}

export default App
