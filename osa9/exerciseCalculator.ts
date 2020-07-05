interface exerciseParameters{
    periodLength:number;
    trainingDays:number;
    success:boolean;
    rating:number;
    ratingDescription:string;
    target:number;
    average:number;
}
const parseArgument=(args:Array<string>)=>{
    if(args.length<4) throw new Error('Not enough arguments');


    if(!isNaN(Number(args[2]))&&!isNaN(Number(args[3]))){
        return{
            target:Number(args[2]),
            hours:args.slice(3).map(a=>Number(a))
        };
    }else{
        throw new Error('Provided values are not numbers');
    }
};
const calculateExercises=(target:number,hours:Array<number>):exerciseParameters=>{
const daysTraining=hours.filter(h=>h!==0);
return{
    periodLength:hours.length,
    trainingDays:daysTraining.length,
    success:daysTraining.length===7?true:false,
    rating:target,
    ratingDescription:daysTraining.length===7?'Pretty good':'Not too bad but could be better',
    target:target,
    average:hours.reduce( ( p, c ) => p + c, 0 ) / hours.length

};

};
try{
    const {target,hours}=parseArgument(process.argv);
    console.log(calculateExercises(target,hours));

}catch(e){
    const result=(e as Error).message;
    console.log('Error, something went wrong: ',result);
}