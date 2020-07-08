import diagnoses from '../data/diagnosesData';
import {DiagnoseEntry} from '../types';


console.log('diagnoses is ',diagnoses);
const getEntries=():Array<DiagnoseEntry>=>{
    return diagnoses;
};



export default {
    getEntries
};