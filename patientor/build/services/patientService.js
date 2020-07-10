"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const patientsData_1 = __importDefault(require("../data/patientsData"));
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
exports.default = { getNonSensitiveEntries, addPatient };
