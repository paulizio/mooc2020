import React from 'react'
import  { addNotification} from '../reducers/notificationReducer'
import { newAnecdote } from '../reducers/anecdoteReducer'
import {connect} from 'react-redux'

const AnecdoteForm=(props)=>{

    const addAnecdote=async(event)=>{
        event.preventDefault()
        const content=event.target.anecdote.value
        event.target.anecdote.value=''
        props.newAnecdote(content)
        props.addNotification(`Anecdote "${content}" added to the list`,5000)
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

export default connect(null,{addNotification,newAnecdote})(AnecdoteForm)