import React, { useState, useEffect } from "react"
import List from '@mui/material/List'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'

import Theme from './theme'

import Vote from './components/Vote'
import VoteButton from './components/VoteButton'

import * as websocket from './features/websocket/actions'
import * as pointingPoker from './features/pointing-poker/actions'

import Index from './routes/index'
import Room from './routes/room'

const basename = process.env.NODE_ENV !== 'production'
  ? '/'
  : '/agile-client'

function App() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(websocket.connect())
  }, [])

  const state = useSelector(r => r)

  return (
    <Theme>
      <CssBaseline />
      <Box p={2}>
        <Typography paragraph variant="h2">App</Typography>
        <Router basename={basename}>
          <Switch>
            <Route path="/:room">
              <Room />
            </Route>
            <Route path="*">
              <Index />
            </Route>
          </Switch>
        </Router>
        <Typography paragraph variant="h2">Testing</Typography>
        <Card>
          <CardContent>
            <code>
              <pre>
                {JSON.stringify(state, null, 2)}
              </pre>
            </code>
          </CardContent>
        </Card>
      </Box>
    </Theme>
  )
}

export default App
