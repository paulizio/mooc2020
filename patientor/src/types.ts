export interface DiagnoseEntry{
    code:string,
    name:string,
    latin?:string
}
export interface Entry {
    id:string,
    date:string,
    type:string,
    specialist:string
}
export interface PatientEntry{
    id:string,
    name:string,
    dateOfBirth:string,
    ssn:string,
    gender:string,
    occupation:string,

}
interface BaseEntry{
    id:string;
    description:string;
    date:string;
    specialist:string;
    diagnosisCodes?:Array<DiagnoseEntry['code']>;
}
export interface Patient {
    id: string;
    name: string;
    ssn: string;
    occupation: string;
    gender: string;
    dateOfBirth: string;
    entries: Entries[];
}

export type PublicPatient = Omit<Patient, 'ssn' | 'entries' >
export type getNonSensitivePatientEntries= Omit<PatientEntry,'ssn'|'entries'>;

export type NewPatientEntry=Omit<Patient,'id'|'entries'>;

export enum Gender{
    Male='male',
    Female='female'
}

export interface OccupationalHealthCareEntry extends BaseEntry{
    type: 'OccupationalHealthcare',
    employerName: string;
    sickLeave?:SickLeave
}
export interface HospitalEntry extends BaseEntry {
    type: 'HealthCheck',
    healthCheckRating: HealthCheckRating
}
export interface Hospital extends BaseEntry {
    type: 'Hospital',
    discharge:Discharge
}
export enum HealthCheckRating {
    "Healthy" = 0,
    "LowRisk" = 1,
    "HighRisk" = 2,
    "CriticalRisk" = 3
  }
  interface SickLeave{
      startDate:string;
      endDate:string;
  }
  interface Discharge{
    date:string;
    criteria:string;
}

export type Entries =
|HospitalEntry
|OccupationalHealthCareEntry
|Hospital;