import * as React from 'react'
import logo from './logo.svg'
import './App.css'
import { ChartComponent } from '../components/ChartComponent'
import { Container } from '@material-ui/core'

export const App = (props: any) => {
  return (
    <Container>
      <ChartComponent />
    </Container>
  )
}

export default App
