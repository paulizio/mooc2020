import React from 'react'

const PersonForm=(props)=>{

return(
 
    <form onSubmit={props.addNote}>
    <div>
      name: <input value={props.newName} onChange={props.handlePersonChange}/>
    </div>
    <div>number: <input value={props.newPhone} onChange={props.handleNewPhone}/></div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>

    )
}
export default PersonForm