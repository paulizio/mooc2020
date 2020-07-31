/* eslint-disable @typescript-eslint/no-explicit-any */
import {NewPatientEntry,Gender} from './types'


const isString = (text: any): text is string => {
    return typeof text === 'string' || text instanceof String;
  };

  const isGender = (param: any): param is Gender => {
    return Object.values(Gender).includes(param);
  };

const parseName = (name: any): string => {
    if (!name || !isString(name)) {
      throw new Error('Incorrect or missing comment: ' + name);
    }
  
    return name;
  }
  const parseDateOfBirth = (dateOfBirth: any): string => {
    if (!dateOfBirth || !isString(dateOfBirth)) {
      throw new Error('Incorrect or missing comment: ' + dateOfBirth);
    }
  
    return dateOfBirth;
  }
  const parseSsn = (ssn: any): string => {
    if (!ssn || !isString(ssn)) {
      throw new Error('Incorrect or missing comment: ' + ssn);
    }
  
    return ssn;
  }
  const parseGender = (gender: any): Gender => {
    if (!gender || !isGender(gender)) {
      throw new Error('Incorrect or missing comment: ' + gender);
    }
  
    return gender;
  }
  const parseOccupation = (occupation: any): string => {
    if (!occupation || !isString(occupation)) {
      throw new Error('Incorrect or missing comment: ' + occupation);
    }
  
    return occupation;
  }

const toNewPatientEntry=(object:any):NewPatientEntry=>{
    const newEntry:NewPatientEntry={
        name:parseName(object.name),
        dateOfBirth:parseDateOfBirth(object.dateOfBirth),
        ssn:parseSsn(object.ssn),
        gender:parseGender(object.gender),
        occupation:parseOccupation(object.occupation),
        

    }
    return newEntry;
}
export default toNewPatientEntry;