import React from 'react';

const Content=({course})=>course.map((n)=>{

    return(
    <div>
        <h2>{n.name}</h2>
        {n.parts.map(i=><li key={i.id}>{i.name} {i.exercises}</li>)}
        <b>total of {n.parts.reduce((a,b)=>a+b.exercises,0)} exercises</b>
    </div>)
    }
)

export default Content

