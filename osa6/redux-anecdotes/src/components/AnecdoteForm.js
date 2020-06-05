import React from 'react'
import {useDispatch} from 'react-redux'
// import {newAnecdote} from '../reducers/anecdoteReducer'
import  { addNotification,removeNotification} from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'
import { newAnecdote } from '../reducers/anecdoteReducer'


const AnecdoteForm=()=>{
    const dispatch=useDispatch()

    const addAnecdote=async(event)=>{
        event.preventDefault()
        const content=event.target.anecdote.value
        event.target.anecdote.value=''
        const newPost=await anecdoteService.createNew(content)
        dispatch(newAnecdote(newPost))
        // dispatch(newAnecdote(content))
        dispatch(addNotification(`Anecdote "${content}" added to the list`))
        setTimeout(() => {
          dispatch(removeNotification())
        }, 5000);

    }
return(
    <div>
    <h2>create new</h2>
    <form onSubmit={addAnecdote}>
    <div><input name="anecdote"/></div>
    <button type="submit">create</button>
  </form>
  </div>
)
}

export default AnecdoteForm