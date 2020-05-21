import React, { useState,useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'
import personService from './services/person'
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

  useEffect(()=>{
   personService
   .getAll()
   .then(response=>{
     setPersons(response.data)
   })
  },[])
  console.log('render',persons.length,' persons')
   
  const [ newName, setNewName ] = useState('')
  const [newPhone,setNewPhone]=useState('')
  const [filter,setFilter]=useState('')
  const handlePersonChange=(event)=>{
    setNewName(event.target.value)
    console.log(event.target.value)
    
    
  }
  const handleNewPhone=(event)=>{
    setNewPhone(event.target.value)
    console.log(event.target.value)

  }
  const handleFilterChange=(event)=>{
    setFilter(event.target.value)
    console.log(event.target.value)
  }
  const handleDelete=(id,name)=>{
  personService
  .destroy(id)
  .then(response=>{
    setPersons(persons.filter(p=>p.id!==id))
    console.log(response)
  }
    
    )}
const addNote=(event)=>{
  event.preventDefault()
  const personObject={
    name:newName,
    number:newPhone,
    key:newName
  
}
personService
.create(personObject)
.then(response=>{
  setPersons(persons.concat(response.data))
  setNewName('')
  
})
persons.some(p=>p.name.toLowerCase()===personObject.name.toLowerCase())?alert(`${newName} on jo luettelossa`):
setPersons(persons.concat(personObject))
}
  return (
    <div>
      <h1>Phonebook</h1>
<Filter handleFilterChange={handleFilterChange} filter={filter}/>
      <h2>add new</h2>
<PersonForm addNote={addNote} newName={newName} newPhone={newPhone} handlePersonChange={handlePersonChange} handleNewPhone={handleNewPhone} />
      <h2>Numbers</h2>
<Persons persons={persons} filter={filter} handleDelete={handleDelete}/>
    </div>
  )

}

export default App