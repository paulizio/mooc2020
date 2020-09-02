import patients from '../data/patientsData';
import {getNonSensitivePatientEntries, NewPatientEntry,Patient,PublicPatient, NewEntries, Entries} from '../types';
let patientList=[...patients]
console.log('patients is ',patients);
const getNonSensitiveEntries=():getNonSensitivePatientEntries[]=>{
    return patients.map(({id,name,dateOfBirth,gender,occupation,entries})=>({
        id,
        name,
        dateOfBirth,
        gender,
        occupation,
        entries
    }));
};

const addPatient=(patient:NewPatientEntry):PublicPatient=>{
    const newPatientEntry={
        id:(Math.floor(Math.random()*(10000000000-0))+0).toString(),
        ...patient,
        entries:[]
    };
    patients.concat(newPatientEntry)
    return newPatientEntry;
}
const findId=(id:string):Patient|undefined=>{  
    let patient= patients.find((patient) => patient.id === id);
        return patient
}
const addNewEntry=(patient:Patient,entry:NewEntries)=>{
    const newEntry:Entries={
        id:(Math.floor(Math.random()*(10000000000-0))+0).toString(),
        ...entry
    }
const updatedPatient={...patient,entries:patient.entries.concat(newEntry)}
patientList=patientList.map(patient=>patient.id===updatedPatient.id?updatedPatient:patient)
return patientList
}


export default {getNonSensitiveEntries,addPatient,findId,addNewEntry};
