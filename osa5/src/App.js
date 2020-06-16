import React, { useEffect,useLayoutEffect } from 'react'
import blogService from './services/blogs'
import './App.css'
import Notification from './components/Notification'
import BlogForm from './components/BlogForm'
import { initializeBlogs } from './reducers/blogReducer'
import { logOutUser } from './reducers/userReducer'
import { useDispatch, useSelector } from 'react-redux'
import BlogList from './components/BlogList'
import LoginForm from './components/LoginForm'

const App = () => {
  const dispatch=useDispatch()
  const user=useSelector(state => state.user)
  console.log('user in App',user)
  useEffect(() => {
    dispatch(initializeBlogs())
  },[dispatch])

  useLayoutEffect(() => {
    const loggedUserJSON=window.localStorage.getItem('loggedUser')
    if(loggedUserJSON){
      const user=JSON.parse(loggedUserJSON)
      blogService.setToken(user.token)
    }
  },[])

  return (
    <div>
      <Notification />
      {user?
        <div>
          <h2>blogs</h2>
          <p>{user.name} logged in <button id='logout-button' onClick={() => dispatch(logOutUser(user))}>logout</button></p>
          <BlogForm/>
          <BlogList/>
        </div>:
        <LoginForm user={user} />
      }
    </div>
  )
}

export default App