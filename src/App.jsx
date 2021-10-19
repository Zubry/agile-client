import React from "react"
import List from '@mui/material/List'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Theme from './theme'

import Vote from './components/Vote'

function App() {
  return (
    <Theme>
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
    </Theme>
  )
}

export default App
