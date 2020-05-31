import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Blog from './Blog'

test('renders title and author but not url or likes',() => {
  const blog={
    title:'Testing some components',
    author:'Testmaster',
    url:'testtestest.fi',
    likes:'20'
  }
  const component=render(
    <Blog blog={blog}/>
  )
  expect(component.container).toHaveTextContent(
    'Testing some components'
  )
})