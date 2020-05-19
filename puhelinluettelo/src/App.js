import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')
const addNote=(event)=>{
  event.preventDefault()
  const personObject={
    name:newName
    
  }
  newName.includes(persons.name)?alert('asd'):setPersons(persons.concat(personObject))
}
const handleNewNote=(event)=>{
  setNewName(event.target.value)
  console.log(event.target.value)
  

}
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNote}>
        <div>
          name: <input value={newName} onChange={handleNewNote}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(p=><li>{p.name}</li>)}
    </div>
  )

}

export default App