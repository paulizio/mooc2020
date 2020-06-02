const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  console.log(state)
  switch (action.type) {
    case 'GOOD':
    const increaseGood=state.good+1
    const newStateGood={...state,good:increaseGood}
      return newStateGood
    case 'OK':
      const increaseOk=state.ok+1
      const newStateOk={...state,ok:increaseOk}
      return newStateOk

    case 'BAD':
      const increaseBad=state.bad+1
      const newStateBad={...state,bad:increaseBad}
      return newStateBad
    case 'ZERO':
      return state={good:0,ok:0,bad:0}
    default: return state
  }
  
}

export default counterReducer