import anecdoteService from '../services/anecdotes'

// const anecdotesAtStart = [
//   'If it hurts, do it more often',
//   'Adding manpower to a late software project makes it later!',
//   'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//   'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//   'Premature optimization is the root of all evil.',
//   'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
// ]

// const getId = () => (100000 * Math.random()).toFixed(0)

// const asObject = (anecdote) => {
//   return {
//     content: anecdote,
//     id: getId(),
//     votes: 0
//   }
// }

// const initialState = anecdotesAtStart.map(asObject)
export const newAnecdote=content=>{
  return async dispatch=>{
    const anecdoteNew=await anecdoteService.createNew(content)
    dispatch({
      type:'NEWANECDOTE',
      data:anecdoteNew
    })
  }
}

export const addVote=(id,newObject)=>{
  return async dispatch =>{
  const updateAnecdote=await anecdoteService.updateVote(id,newObject)
    dispatch({
    type:'VOTE',
    data:updateAnecdote

  })}
}
const anecdoteReducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch(action.type){
    case 'VOTE':
      //id of anecdote we want to vote
      const id=action.data.id
      console.log('id is ',id)
    //anecdote we want to vote
      const anecdoteToVote=state.find(anecdote=>anecdote.id===id)
      console.log('anecdoteToVote is ', anecdoteToVote)
    //add vote for anecdote
      const voteAdded=anecdoteToVote.votes+1
      console.log('Vote added is ',voteAdded)
    //add new vote to object
      const changedAnecdote={...anecdoteToVote,votes:voteAdded}
      console.log('changed anecdote is ',changedAnecdote)
    //change state
      const newState=state.map(anecdote=>anecdote.id!==id?anecdote:changedAnecdote)
      console.log('newState is ',newState)
      return newState
      case 'NEWANECDOTE':
        return [...state,action.data]
      case 'INIT_ANECDOTES':
        return action.data
      default:
        return state
  
  }
}
export const initializeAnecdotes=()=>{
  return async dispatch=>{
    const anecdotes=await anecdoteService.getAll()
    dispatch({
    type:'INIT_ANECDOTES',
    data:anecdotes
  })
  }
}


export default anecdoteReducer