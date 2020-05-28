import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login'
const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')
  const [user,setUser]=useState(null)

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
      )  
    }, [])
    
    useEffect(()=>{
      const loggedUserJSON=window.localStorage.getItem('loggedUser')
      if(loggedUserJSON){
        const user=JSON.parse(loggedUserJSON)
        setUser(user)
        blogService.setToken(user.token)
      }
    },[])
  const handleLogin=async(event)=>{
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
      console.log('error')
    }
    
  }
const loginForm=()=>(
  <form onSubmit={handleLogin}>
    <div>
      username
      <input 
      type="text"
      value={username}
      name="Username"
      onChange={({target})=>setUsername(target.value)}
      />
    </div>
    <div>
    password
    <input
    type="text"
    value={password}
    name="Password"
    onChange={({target})=>setPassword(target.value)}
    />
    </div>
    <button type="submit">login</button>

  </form>
)

const blogForm=()=>(
  <div>
  {blogs.map(blog =>
    <Blog key={blog.id} blog={blog} />
  )}
  </div>
)
const handleLogOut=(event)=>{
  event.preventDefault()
  window.localStorage.removeItem('loggedUser')
  setUser(null)
}

  return (
    <div>
     {user?
     <div>
     <h2>blogs</h2>
  <p>{user.name} logged in <button onClick={handleLogOut}>logout</button></p>
  {blogForm()}
  </div>:
     loginForm()
     
    }
    </div>
    
     
  )
}

export default App