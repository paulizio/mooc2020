import patients from '../data/patientsData';
import {getNonSensitivePatientEntries} from '../types';


const getNonSensitiveEntries=():getNonSensitivePatientEntries[]=>{
    return patients.map(({id,name,dateOfBirth,gender,occupation})=>({
        id,
        name,
        dateOfBirth,
        gender,
        occupation
    }));
};

export default {getNonSensitiveEntries};
