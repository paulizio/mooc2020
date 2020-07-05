interface BmiValues{
    weight:number;
    height:number;
}
interface returnValues {
     [name:number]:BmiValues;
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
export  const calculateBmi=(weight:number,height:number):returnValues=>{
    
    if(weight/Math.pow(height*0.01,2)>25){
var json={
        "weight":'weight',
        "height":'weight',
        "bmi":'Overweight (too much weight)'
    
}
json.weight=weight.toString()
json.height=height.toString()

return json

    }if(weight/Math.pow(height*0.01,2)>18.5){
        var json={
            "weight":'weight',
            "height":'weight',
            "bmi":'Normal weight(good weight)'
        
    }
    json.weight=weight.toString()
    json.height=height.toString()
    
        return json

        }else{ 
            var json={
                "weight":'weight',
                "height":'weight',
                "bmi":'Underweight (too little weight)'
            
        }
        json.weight=weight.toString()
        json.height=height.toString()
        
            return json
        }
  
try{
    const {weight,height}=parseArguments(process.argv);
    console.log(calculateBmi(weight,height))

}catch(e){
    console.log('Error, something went wrong: ',e.message)
}
}