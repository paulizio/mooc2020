import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header=()=>(
  <h1>Give feedback</h1>
)
const Button=({onClick,text})=>(
  <button onClick={onClick}>{text}</button>
)
const Statistics=({good,neutral,bad,all,points})=>{
  const average=function(a,b){
    return (a/b)
  }
  const positive=function(a,b){
    return (a/b)*100+'%'
  }
  return(

  <table>
  <tbody>
  <h2>Statistics</h2>
  <tr>
<td>Good: {good}</td>
<td>Neutral: {neutral}</td>
<td>Bad: {bad}</td>
<td>All: {all}</td>
<td>Average: {average(points,all)}</td>
<td>Positiivisia: {positive(good,all)}</td>
  </tr>
  </tbody>
  </table>
 
  )
}




const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all,setAll]=useState(0)
  const[points,setPoints]=useState(0)

  const clickGood=()=>{
    setGood(good+1)
    setAll(all+1)
    console.log(points)
    setPoints(points+1)
  }
  const clickBad=()=>{
    setBad(bad+1)
    setAll(all+1)
    console.log(points)
    setPoints(points-1)
  }
  const clickNeutral=()=>{
    setNeutral(neutral+1)
    setAll(all+1)
  }
  return (
    <div>
      <Header/>
      <Button onClick={clickGood} text='good' />
      <Button onClick={clickNeutral} text='neutral' />
      <Button onClick={clickBad} text='bad' />
      <Statistics good={good} bad={bad} neutral={neutral} all={all} points={points}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)