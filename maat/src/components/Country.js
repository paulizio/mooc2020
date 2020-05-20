import React from 'react'

const Country=(props)=>{
const filtteri=props.countries.filter(c=>c.name.toLowerCase().includes(props.finder.toLowerCase()))
if (filtteri.length!=1){
    return(
        <div>
            {filtteri.map(c=><div key={c.name}>{c.name} <button onClick={()=>{props.setFinder(c.name)}}>show</button></div>)}
        </div>
    )
}else{
    return(
<div>
    {filtteri.map(c=><div>
    <h2 >{c.name}</h2>
    <li >capital: {c.capital}</li>
    <li >population: {c.population}</li>
    <h3 >Spoken languages</h3>
    {c.languages.map(l=><ul><li>{l.name}</li></ul>)}
    <br></br>
    <img src={c.flag} width='150' height='100'></img>
    </div>)}

</div>

    )
}}

export default Country