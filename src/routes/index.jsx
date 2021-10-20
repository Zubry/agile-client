import React, { useEffect } from 'react'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'

import { useHistory } from 'react-router'
import { useSelector } from 'react-redux'

import Join from '../components/Join'
import Start from '../components/Start'

const Index = () => {
  const history = useHistory()
  const id = useSelector(state => state.pointingPoker.id)

  useEffect(() => {
    if (id) {
      history.push(`/${id}`)
    }
  }, [id])

  return (
    <Card>
      <CardContent>
        <Stack direction="row" spacing={3} justifyContent="center" alignItems="center">
          <Start />
          <div>&mdash;&nbsp;or&nbsp;&mdash;</div>
          <Join />
        </Stack>
      </CardContent>
    </Card>
  )
}

export default Index
