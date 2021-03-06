import express from 'express';
import patientService from '../services/patientService';
import toNewPatientEntry from '../utils';

const router=express.Router();

router.get('/',(_req,res)=>{
    res.send(patientService.getNonSensitiveEntries());
});
router.post('/',(req,res)=>{
    try{
        const newPatientEntry=toNewPatientEntry(req.body);

        const addedEntry=patientService.addPatient(newPatientEntry);
        res.json(addedEntry);
    }catch(e){
        res.status(400).send(e.message);
    }
})
router.get('/:id',(req,res)=>{
    res.send(patientService.findId(req.params.id))
});

router.post('/:id/entries',(req,res)=>{
    
    const patient=patientService.findId(req.params.id);

    if(patient){
        const newEntry=req.body
        res.json(patientService.addNewEntry(patient,newEntry))       
    }

})

export default router;
