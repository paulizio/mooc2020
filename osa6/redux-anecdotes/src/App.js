import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { getByDisplayValue } from '@testing-library/react'
import {newAnecdote} from './reducers/anecdoteReducer'

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()
  
  const addAnecdote=(event,id)=>{
    event.preventDefault()
    const content=event.target.anecdote.value
    event.target.anecdote.value=''
    dispatch(newAnecdote(content))
  }

  const vote = (id) => {
    console.log('vote', id)
    dispatch({
      type:'VOTE',
      id:id
    })

  }
console.log('votes',anecdotes)
  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.key}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes} 
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name="anecdote"/></div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default App