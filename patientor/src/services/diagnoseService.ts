import diagnoses from '../data/diagnosesData';
import {DiagnoseEntry} from '../types';


const getEntries=():Array<DiagnoseEntry>=>{
    return diagnoses;
};



export default {
    getEntries
};