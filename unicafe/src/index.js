import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header=()=>(
  <h1>Give feedback</h1>
)
const Button=({onClick,text})=>(
  <button onClick={onClick}>{text}</button>
)
const Statistics=({good,neutral,bad})=>(
  <div>
  <h2>Statistics</h2>
  
<li>Good: {good}</li>
<li>Neutral: {neutral}</li>
<li>Bad: {bad}</li>
  </div>
)



const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const clickGood=()=>{
    setGood(good+1)
  }
  const clickBad=()=>{
    setBad(bad+1)
  }
  const clickNeutral=()=>{
    setNeutral(neutral+1)
  }
  return (
    <div>
      <Header/>
      <Button onClick={clickGood} text='good' />
      <Button onClick={clickNeutral} text='neutral' />
      <Button onClick={clickBad} text='bad' />
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)