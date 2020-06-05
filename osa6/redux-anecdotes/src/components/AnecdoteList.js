import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {addVote} from '../reducers/anecdoteReducer'
import {addNotification} from '../reducers/notificationReducer'
const AnecdoteList=(props)=>{
const dispatch=useDispatch()
const anecdotes = useSelector(state => state.anecdotes)
    const vote = (id,content) => {
      const anecdote=anecdotes.find(a=>a.id===id)
        dispatch(addVote(id,anecdote))
        dispatch(addNotification(`You voted "${content}"`,5000))
      }

      return(
         
        anecdotes.map(anecdote =>
            <div key={anecdote.id}>
              <div>
                {anecdote.content}
              </div>
              <div>
                has {anecdote.votes} 
                <button onClick={() => vote(anecdote.id,anecdote.content)}>vote</button>
              </div>
              </div>
      )
)}

export default AnecdoteList