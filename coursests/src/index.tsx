import React from "react";
import ReactDOM from "react-dom";
import {CoursePartsProps,CoursePart} from './types'
const App: React.FC = () => {

  const courseName = "Half Stack application development";
  const courseParts: CoursePart[] = [
    {
      name: "Fundamentals",
      exerciseCount: 10,
      description: "This is an awesome course part"
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7,
      groupProjectCount: 3
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14,
      description: "Confusing description",
      exerciseSubmissionLink: "https://fake-exercise-submit.made-up-url.dev"
    },
    {
      name:"Learning Typescript",
      exerciseCount:27,
      description:'Lol'
    }
  ];
const assertNever=(value:never):never=>{
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  )
}
  const Header:React.FC<{header:string}>=({header})=>(
    <h1>{header}</h1>
  );
const Content:React.FC<{courseParts:CoursePart[]}>=(props)=>(
  <> 
 {props.courseParts.map((part)=><Part key={part.name} part={part}/>)}
  </>)
;

const Total:React.FC<CoursePartsProps>=(props)=>(
<>
<p>Number of exercises {props.courseParts.reduce((carry, part) => carry + part.exerciseCount, 0)}</p>
</>
)

const Part:React.FC<{part:CoursePart}>=({part})=>{
    switch(part.name){
      case 'Fundamentals':
        return(
          <div>
            <li>
            <p>{part.name}</p>
            <p>{part.description}</p>
            </li>
          </div>
        );
        case 'Using props to pass data':
          return(
            <div>
              <li>
              <p>{part.name}</p>
              <p>{part.groupProjectCount}</p>
              </li>
            </div>
          );
          case 'Deeper type usage':
            return(
              <div>
                <li>
                <p>{part.name}</p>
                <p>Description: {part.description}</p>
                <p>{part.exerciseSubmissionLink}</p>
                </li>
              </div>
            );
            case 'Learning Typescript':
              return(
                <div>
                  <p>{part.name}</p>
                  <p>{part.description}</p>
                  <p>{part.exerciseCount}</p>
                </div>
              );
            default:
return assertNever(part);
    }
  }

  return (
    <div>
    <Header header={courseName}/>
    <Content courseParts={courseParts}/>
    <Total courseParts={courseParts}/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));