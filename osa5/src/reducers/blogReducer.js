/* eslint-disable no-case-declarations */
import blogService from '../services/blogs'

export const createBlog=content => {
  return async dispatch => {
    const newBlog=await blogService.create(content)
    dispatch({
      type:'ADD_BLOG',
      data:newBlog,
      likes:0
    })
  }

}
export const removeBlog=(id) => {
  return{
    type:'DELETE_BLOG',
    data:{ id }
  }
}
export const likeBlog=blog => {
  return async dispatch => {
    const updatedBlog=await blogService.update(blog)
    dispatch({
      type:'LIKE_BLOG',
      data:{blog:updatedBlog}
    })
  }
}

const blogReducer=(state=[],action) => {
  console.log('state now is ',state)
  console.log('action is ',action)

  switch(action.type){
  case 'ADD_BLOG':
    return [...state,action.data]
  case 'DELETE_BLOG':
    const id=action.data.id
    return state.filter(blog => blog.id!==id)
  case 'LIKE_BLOG':
    const blogToLike=action.data.blog
    const likedBlog=state.find(blog => blog.id===blogToLike.id)
    const addedLike={ ...likedBlog,
      likes:likedBlog.likes+1
    }
    return state.map(blog => blog.id!==blogToLike.id?blog:addedLike)
  case 'INIT_BLOGS':
    return action.data
  default:
    return state
  }
}
export const initializeBlogs=() => {
  return async dispatch => {
    const blogs=await blogService.getAll()
    dispatch({
      type:'INIT_BLOGS',
      data:blogs
    })
  }
}
export default blogReducer