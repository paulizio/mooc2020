
import { createStore,combineReducers } from 'redux'
import anecdoteReducer from '../reducers/anecdoteReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import notificationReducer from '../reducers/notificationReducer'



const reducer = combineReducers({
    anecdotes: anecdoteReducer,
    notification:notificationReducer
  })
  
 export const store = createStore(reducer, composeWithDevTools())

//  anecdoteService.getAll().then(anecdotes=>
//   store.dispatch(initializeAnecdotes(anecdotes))
//  )
