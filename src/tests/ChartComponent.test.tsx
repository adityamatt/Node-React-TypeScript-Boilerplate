// Link.react.test.js
import React from 'react'
import { ChartComponent } from '../components/ChartComponent'
import renderer, { ReactTestRendererNode } from 'react-test-renderer'
import ReactDOM from 'react-dom'

let container: Element | DocumentFragment | null

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

test('Text Changes when hovered', () => {
  const chart = renderer.create(<ChartComponent />)

  const chartInstance = chart.root

  const tree = chart.toJSON() as renderer.ReactTestRendererJSON
  tree.children = tree.children as Array<ReactTestRendererNode>
  const beforefoundHeaderText = chartInstance.findByProps({ id: 'HeaderText' }).props.children

  //this can't be null
  expect(tree).not.toBeNull()
  expect(tree.children.length).toBeGreaterThan(0)
  expect(beforefoundHeaderText).toEqual('Hover over graph to change this text')

  const canvas = chartInstance.findByType('canvas')

  //simulate onMouseOver
  canvas.props.onMouseOver()

  const afterfoundHeaderText = chartInstance.findByProps({ id: 'HeaderText' }).props.children
  expect(afterfoundHeaderText).toEqual('Mouse Hovered over Chart')

  //simulate mouse leave
  canvas.props.onMouseLeave()

  const leavefoundHeaderText = chartInstance.findByProps({ id: 'HeaderText' }).props.children
  expect(leavefoundHeaderText).toEqual('Hover over graph to change this text')
})
