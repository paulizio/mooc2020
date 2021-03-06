import axios from 'axios'

const baseUrl='http://localhost:3001/anecdotes'

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}
const getAll=async()=>{
    const response=await axios.get(baseUrl)
    return response.data
}
const createNew=async(content)=>{
    const response=await axios.post(baseUrl,asObject(content))
    return response.data
}
const updateVote=async(id,newObject)=>{
    const newVotes=newObject.votes+1
    const votedAnecdote={...newObject,votes:newVotes}
    const response=await axios.put(`${baseUrl}/${id}`,votedAnecdote)
    return response.data
}

export default {getAll,createNew,updateVote}