import React, { useState, useEffect,useLayoutEffect } from 'react'
import blogService from './services/blogs'
import loginService from './services/login'
import './App.css'
import Notification from './components/Notification'
import Togglable from './components/Togglable'
import BlogForm from './components/BlogForm'
import {initializeBlogs} from './reducers/blogReducer'
import { useDispatch } from 'react-redux'
import BlogList from './components/BlogList'

const App = () => {
  // const [blogs, setBlogs] = useState([])
  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')
  const [user,setUser]=useState(null)
  const [errorMessage,setErrorMessage]=useState(null)
  const [errorName,setErrorName]=useState(null)

  const dispatch=useDispatch()

  useEffect(() => {
    dispatch(initializeBlogs())
  },[dispatch])

  const blogFormRef=React.createRef()

  // useEffect(() => {
  //   blogService.getAll().then(blogs =>
  //     setBlogs( blogs )
  //   )
  // }, [])

  useLayoutEffect(() => {
    const loggedUserJSON=window.localStorage.getItem('loggedUser')
    if(loggedUserJSON){
      const user=JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  },[])
  const handleLogin=async(event) => {
    event.preventDefault()

    try{
      const user=await loginService.login({
        username,password,
      })
      window.localStorage.setItem(
        'loggedUser',JSON.stringify(user)
      )
      blogService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
    }catch (exception){
      setErrorMessage('Invalid username or password')
      setErrorName('error')

      setTimeout(() => {
        setErrorMessage(null)
        setErrorName(null)
      },5000)
    }

  }
  const loginForm=() => (
    <form onSubmit={handleLogin}>
      <div>
      username
        <input
          id='username'
          type="text"
          value={username}
          name="Username"
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>
      <div>
    password
        <input
          id='password'
          type="text"
          value={password}
          name="Password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button id='login-button' type="submit">login</button>

    </form>
  )

  const blogForm=() => (
    <Togglable buttonLabel='new blog' ref={blogFormRef}>
      <BlogForm />
    </Togglable>
  )
  const handleLogOut=(event) => {
    event.preventDefault()
    window.localStorage.removeItem('loggedUser')
    setUser(null)
  }

  return (
    <div>
      <Notification message={errorMessage} className={errorName}/>
      {user?
        <div>
          <h2>blogs</h2>
          <p>{user.name} logged in <button id='logout-button' onClick={handleLogOut}>logout</button></p>
          {blogForm()}
          <BlogList/>
        </div>:
        loginForm()
      }


    </div>


  )
}

export default App