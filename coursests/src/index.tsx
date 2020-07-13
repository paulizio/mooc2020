import React from "react";
import ReactDOM from "react-dom";
import {CoursePartsProps} from './types'
const App: React.FC = () => {
  const courseName = "Half Stack application development";
  const courseParts = [
    {
      name: "Fundamentals",
      exerciseCount: 10
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14
    }
  ];

  const Header:React.FC<{header:string}>=({header})=>(
    <h1>{header}</h1>
  );
const Content:React.FC<CoursePartsProps>=(props)=>(
  <> 
 {props.courseParts.map((part:any)=><p>{part.name} {part.exerciseCount}</p>)}
  </>)
;

const Total:React.FC<CoursePartsProps>=(props)=>(
<>
<p>Number of exercises {props.courseParts.reduce((carry, part) => carry + part.exerciseCount, 0)}</p>
</>
)
  return (
    <div>
    <Header header={courseName}/>
    <Content courseParts={courseParts}/>
    <Total courseParts={courseParts}/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));