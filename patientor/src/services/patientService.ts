import patients from '../data/patientsData';
import {getNonSensitivePatientEntries, PatientEntry, NewPatientEntry,Patient} from '../types';

console.log('patients is ',patients);
const getNonSensitiveEntries=():getNonSensitivePatientEntries[]=>{
    return patients.map(({id,name,dateOfBirth,gender,occupation})=>({
        id,
        name,
        dateOfBirth,
        gender,
        occupation
    }));
};

const addPatient=(entry:NewPatientEntry):PatientEntry=>{
    const newPatientEntry={
        id:(Math.floor(Math.random()*(10000000000-0))+0).toString(),
        ...entry
    };
    patients.push(newPatientEntry);
    return newPatientEntry;
}
const findId=(id:string):Patient|undefined=>{  
    let patient= patients.find((patient) => patient.id === id);
    if (!patient){
        return undefined;
    }
    else if(!('entries' in patient)){
        let p={...patient,entries:[]}
        return p
    }
        return patient
}

export default {getNonSensitiveEntries,addPatient,findId};
