export interface DiagnoseEntry{
    code:string,
    name:string,
    latin?:string
}
export interface Entry {
}
export interface PatientEntry{
    id:string,
    name:string,
    dateOfBirth:string,
    ssn:string,
    gender:string,
    occupation:string
}
export interface Patient {
    id: string;
    name: string;
    ssn: string;
    occupation: string;
    gender: string;
    dateOfBirth: string;
    entries: Entry[]
}

export type PublicPatient = Omit<Patient, 'ssn' | 'entries' >
export type getNonSensitivePatientEntries= Omit<PatientEntry,'ssn'>;

export type NewPatientEntry=Omit<PatientEntry,'id'>;

export enum Gender{
    Male='male',
    Female='female'
}