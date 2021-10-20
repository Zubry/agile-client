import React from 'react'

import List from '@mui/material/List'

import { useSelector } from 'react-redux'

import Vote from '../Vote'

const Votes = () => {
  const users = useSelector(state => state.pointingPoker.users)

  return (
    <List>
      {
        users.map(user => (
          <Vote key={user} name={user} />
        ))
      }
    </List>
  )
}

export default Votes
