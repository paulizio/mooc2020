import express from 'express';
import patientService from '../services/patientService';

const router=express.Router();

router.get('/',(_req,res)=>{
    res.send(patientService.getNonSensitiveEntries());
});
router.post('/',(req,res)=>{
    const {ssn,name,dateOfBirth,gender,occupation}=req.body
    const newPatientEntry=patientService.addPatient({
        name,
        dateOfBirth,
        ssn,
        gender,
        occupation
    });
    res.json(newPatientEntry);
});

export default router;
