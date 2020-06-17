import React, { useEffect,useLayoutEffect } from 'react'
import { loginWithToken } from './reducers/userReducer'
import './App.css'
import Notification from './components/Notification'
import BlogForm from './components/BlogForm'
import { initializeBlogs } from './reducers/blogReducer'
import { useDispatch, useSelector } from 'react-redux'
import BlogList from './components/BlogList'
import LoginForm from './components/LoginForm'
import Navbar from './components/Navbar'
import { Switch, Route } from 'react-router-dom'
import Users from './components/Users'
import { initializeUsers } from './reducers/getUsersReducer'
const App = () => {
  const dispatch=useDispatch()
  const user=useSelector(state => state.user)
  const blogs=useSelector(state => state.blogs)
  const users=useSelector(state => state.users)
  console.log('user in App',user)
  console.log('userlist in App', users)
  useEffect(() => {
    dispatch(initializeBlogs())
  },[dispatch])

  useLayoutEffect(() => {
    dispatch(loginWithToken())
  },[dispatch])
  useEffect(() => {
    dispatch(initializeUsers())
  },[dispatch])

  return (
    <div>
      <Notification />

      {user?
        <div>
          <Navbar  user={user}/>
          <h2>blogs</h2>
          <p>{user.name} logged in</p>
          <BlogForm/>
        </div>:
        <LoginForm user={user} />
      }

      <Switch>
        <Route path="/blogs">
          <BlogList blogs={blogs} user={user}/>
        </Route>
        <Route path="/users">
          <Users user={user} users={users} />
        </Route>
        <Route path="/">
          {/* <LoginForm /> */}
        </Route>
      </Switch></div>

  )
}

export default App