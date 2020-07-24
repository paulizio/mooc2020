"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const patientsData_1 = __importDefault(require("../data/patientsData"));
console.log('patients is ', patientsData_1.default);
const getNonSensitiveEntries = () => {
    return patientsData_1.default.map(({ id, name, dateOfBirth, gender, occupation }) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation
    }));
};
const addPatient = (entry) => {
    const newPatientEntry = Object.assign({ id: (Math.floor(Math.random() * (10000000000 - 0)) + 0).toString() }, entry);
    patientsData_1.default.push(newPatientEntry);
    return newPatientEntry;
};
const findId = (id) => {
    let patient = patientsData_1.default.find((patient) => patient.id === id);
    if (!patient) {
        return undefined;
    }
    else if (!('entries' in patient)) {
        let p = Object.assign(Object.assign({}, patient), { entries: [] });
        return p;
    }
    return patient;
};
exports.default = { getNonSensitiveEntries, addPatient, findId };
