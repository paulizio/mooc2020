interface BmiValues{
    weight:number;
    height:number;
}
const parseArguments=(args:Array<string>):BmiValues=>{
    if(args.length<4) throw new Error('Not enough arguments');
    if (args.length>4)throw new Error('Too many arguments');

    if(!isNaN(Number(args[2]))&&!isNaN(Number(args[3]))){
        return{
            weight:Number(args[2]),
            height:Number(args[3])
        }
    }else{
        throw new Error('Provided values are not numbers')
    }
}
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
    const {weight,height}=parseArguments(process.argv);
    console.log(calculateBmi(weight,height))

}catch(e){
    console.log('Error, something went wrong: ',e.message)
}