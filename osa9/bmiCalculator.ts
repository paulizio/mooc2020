// interface Bmi{
//     weight:number;
//     height:number;
// }

const calculateBmi=(weight:number,height:number)=>{
    if(weight/Math.pow(height*0.01,2)>25){
       return 'Overweight (bad weight)'
    }else if(weight/Math.pow(height*0.01,2)>18.5){
          return  'Normal (good weight)'
        }else if (weight/Math.pow(height*0.01,2)<18.5){
           return  'Underweight (too little weight)'
        }
}
try{
    console.log(calculateBmi(74,180));

}catch(e){
    console.log('Error, something went wrong: ',e.message)
}