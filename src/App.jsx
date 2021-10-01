import React from "react"
import List from '@mui/material/List'

import Vote from './components/Vote'

function App() {
  return (
    <List>
      <Vote name="James" value="0.5" isRevealed/>
      <Vote name="James 1" isRevealed />
      <Vote name="James 1" />
      <Vote name="James 1" value="2" />
    </List>
  )
}

export default App
