import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button=({onClick,text})=>(
  <button onClick={onClick}>{text}</button>
)

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes,setVotes]=useState(Array.apply(null, new Array(6)).map(Number.prototype.valueOf,0))
  const copy={...votes}
  const randomAnecdote=()=>{
    const random=Math.round(Math.random()*5)
    setSelected(random)

  }
  const vote=()=>{
    copy[selected]+=1
    setVotes(copy)
    console.log(copy[selected])
    
  }

  return (
    <div>
      {props.anecdotes[selected]}
      <br></br>
     has {votes[selected]} votes
      <br></br>
      <Button onClick={vote} text='vote'/>
      <Button onClick={randomAnecdote} text='next anecdote'/>
      
    </div>
  )
 
}


const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)