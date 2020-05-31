import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Blog from './Blog'

describe('<Blog/>',() => {
  const blog={
    title:'Testing some components',
    author:'Testmaster',
    url:'testtestest.fi',
    likes:'20'
  }
  let component
  beforeEach(() => {
    component=render(
      <Blog blog={blog} buttonLabel="view"/>
    )
  })
  test('renders title and author but not url or likes',() => {
    const div=component.container.querySelector('.hideInfo')
    expect(div).toHaveTextContent(
      'Testing some components','Testmaster'
    )
    expect(div).not.toHaveTextContent(
      'testtestest.fi','20'
    )})
  test('show children after clicking button and show likes and url',() => {
    const button=component.container.querySelector('button')
    fireEvent.click(button)

    const div=component.container.querySelector('.showAllInfo')
    expect(div).not.toHaveStyle('display:none')
    expect(div).toHaveTextContent(
      'Testing some components','Testmaster', 'testtestest.fi','20'
    )
  })})