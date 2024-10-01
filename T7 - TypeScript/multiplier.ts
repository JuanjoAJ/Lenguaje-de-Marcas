const multiplicator =(a:number, b:number, printText:string)=>{
    console.log(printText, a*b);
};

const parseArguments = (args): Array<Number> =>{
    if(args.length !==4) throw new Error(`Wrong number of arguments`);
    const fisrtNumber = Number(args[2]);
    const secondNumber = Number(args[3]);
    if(!isNaN(fisrtNumber) && !isNaN(secondNumber)) return [fisrtNumber, secondNumber];
    throw new Error('Provided values were not numbers');
}

const cleanArgumnets =parseArguments(process.argv);

console.log(process.argv);

const a:number = Number(cleanArgumnets[0]);
const b:number = Number(cleanArgumnets[1]);

multiplicator(a, b, `Multiplied ${a} and ${b} and the result is: `);