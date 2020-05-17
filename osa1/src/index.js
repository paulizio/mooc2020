import React from 'react'
import ReactDOM from 'react-dom'

const Header =(props)=>{
  return(
    <div>
      <h1>{props.course.name}</h1>
    </div>

  )
}

const Content =(props)=> {
  return (
    <div>
      <Part course={props.course} />
      
    </div>
  )
}
const Part=(props)=>{
  const lista=props.course.parts.map(a=><li>{a.name} {a.exercises}</li>)
  
  return(
    <div>
      <p>
      {lista}

      </p>
    </div>

  )
}
const Total=(props)=>{
 
 const summa=props.course.parts.reduce((sum,{exercises})=>sum+exercises,0)

  return(
    <div>
      <p>Number of exercises {summa}</p>
    </div>

  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))