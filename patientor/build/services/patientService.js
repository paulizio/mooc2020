"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const patientsData_1 = __importDefault(require("../data/patientsData"));
let patientList = [...patientsData_1.default];
console.log('patients is ', patientsData_1.default);
const getNonSensitiveEntries = () => {
    return patientsData_1.default.map(({ id, name, dateOfBirth, gender, occupation, entries }) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation,
        entries
    }));
};
const addPatient = (patient) => {
    const newPatientEntry = Object.assign(Object.assign({ id: (Math.floor(Math.random() * (10000000000 - 0)) + 0).toString() }, patient), { entries: [] });
    patientsData_1.default.concat(newPatientEntry);
    return newPatientEntry;
};
const findId = (id) => {
    let patient = patientsData_1.default.find((patient) => patient.id === id);
    return patient;
};
const addNewEntry = (patient, entry) => {
    const newEntry = Object.assign({ id: (Math.floor(Math.random() * (10000000000 - 0)) + 0).toString() }, entry);
    const updatedPatient = Object.assign(Object.assign({}, patient), { entries: patient.entries.concat(newEntry) });
    patientList = patientList.map(patient => patient.id === updatedPatient.id ? updatedPatient : patient);
    return patientList;
};
exports.default = { getNonSensitiveEntries, addPatient, findId, addNewEntry };
