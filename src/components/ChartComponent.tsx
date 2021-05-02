import { Button, Grid } from '@material-ui/core'
import Chart from 'chart.js/auto'
import * as React from 'react'
import { Scatter } from 'react-chartjs-2'

const rand = () => Math.round(Math.random() * 255 - 10)
const getRandomColor = () => {
  return `rgba(${rand()},${rand()},${rand()},1)`
}
export function ChartComponent() {
  const defaultHeader = 'Hover over graph to change this text'
  const [header, setHeader] = React.useState<string>(defaultHeader)
  const [color1, setColor1] = React.useState<string>('rgba(255, 0, 0, 1)')
  const [color2, setColor2] = React.useState<string>('rgba(0, 255, 0, 1)')
  const data: Chart.ChartData = {
    datasets: [
      {
        label: 'Random data 1',
        data: [
          { x: rand(), y: rand() },
          { x: rand(), y: rand() },
          { x: rand(), y: rand() },
          { x: rand(), y: rand() },
          { x: rand(), y: rand() },
          { x: rand(), y: rand() },
          { x: rand(), y: rand() },
          { x: rand(), y: rand() },
          { x: rand(), y: rand() },
          { x: rand(), y: rand() },
          { x: rand(), y: rand() },
          { x: rand(), y: rand() },
          { x: rand(), y: rand() },
          { x: rand(), y: rand() },
        ],
        backgroundColor: color1,
      },
      {
        label: 'Random data 2',
        data: [
          { x: rand(), y: rand() },
          { x: rand(), y: rand() },
          { x: rand(), y: rand() },
          { x: rand(), y: rand() },
          { x: rand(), y: rand() },
          { x: rand(), y: rand() },
          { x: rand(), y: rand() },
          { x: rand(), y: rand() },
          { x: rand(), y: rand() },
          { x: rand(), y: rand() },
          { x: rand(), y: rand() },
          { x: rand(), y: rand() },
          { x: rand(), y: rand() },
          { x: rand(), y: rand() },
        ],
        backgroundColor: color2,
      },
    ],
  }
  const options: Chart.ChartOptions = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  }

  return (
    <div>
      <hr />
      <Grid container justify="center" id="HeaderText">
        {header}
      </Grid>
      <Button
        variant="contained"
        onClick={() => {
          setColor1(getRandomColor())
          setColor2(getRandomColor())
        }}
      >
        Click to Randomize Colors
      </Button>
      <Scatter
        data={data}
        options={options}
        type={1}
        color={'rgba(0,0,0,0)'}
        onMouseOver={() => {
          setHeader('Mouse Hovered over Chart')
        }}
        onMouseLeave={() => {
          setHeader(defaultHeader)
        }}
      />
      <hr />
    </div>
  )
}
