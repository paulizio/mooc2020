import patients from '../data/patientsData';
import {getNonSensitivePatientEntries, PatientEntry, NewPatientEntry} from '../types';


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

export default {getNonSensitiveEntries,addPatient};
