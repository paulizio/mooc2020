import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {addVote} from '../reducers/anecdoteReducer'
import {voteNotification,removeNotification} from '../reducers/notificationReducer'
const AnecdoteList=(props)=>{
const dispatch=useDispatch()
const anecdotes = useSelector(state => state.anecdotes)
    const vote = (id,content) => {
        dispatch(addVote(id))
        dispatch(voteNotification(`You voted "${content}"`))
        setTimeout(() => {
          dispatch(removeNotification())
        }, 5000);

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