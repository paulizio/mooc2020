import express from 'express';
import {calculateBmi} from './bmiCalculator';
const app=express();

app.get('/bmi',(req,res)=>{
    if(isNaN(Number(req.query.height))||isNaN(Number(req.query.weight))){
        const e={"error":"malformatted paramerers"};
        res.send(e);    
    }else{
        res.send(calculateBmi(Number(req.query.weight),Number(req.query.height)));
    }
});

const PORT=3003;

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});