import React, {useEffect,useState} from 'react';
import axios from 'axios'
import Country from './components/Country'
const App=()=>{
const [countries,setCountries]=useState([])
const [finder,setFinder]=useState('')
useEffect(()=>{
  axios
  .get('https://restcountries.eu/rest/v2/all')
  .then(response=>{
    console.log('promise fulfilled')
    setCountries(response.data)

  })
},[])
console.log('render', countries.length,' countries')
const handleFinderChange=(event)=>{
setFinder(event.target.value)

}

  return(
    <div>
<form>
  find countries <input value={finder} onChange={handleFinderChange}/>
</form>
<Country countries={countries} finder={finder} setCountries={setCountries} setFinder={setFinder}/>

    </div>
  )
}

export default App;
