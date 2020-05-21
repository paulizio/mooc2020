import React from 'react'

const Persons=(props)=>{
    const filtteri=props.persons.filter(f=>f.name.toLowerCase().includes(props.filter.toLowerCase()))
    return(
    <div>
    {filtteri.map(p=><li key={p.name}>{p.name} {p.number} <button onClick={()=>props.handleDelete(p.id,p.name)}>delete</button></li>)}
    </div>
    )
}

export default Persons