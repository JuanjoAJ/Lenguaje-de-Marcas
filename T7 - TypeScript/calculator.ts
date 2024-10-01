type Operation='multiply'| 'add' |'divide';

const calculator= (a:number, b:number, op:Operation):number =>{
if(op ==='multiply') return a*b;
if(op==='add') return a+b;
if(op==='divide'){
    if(b===0 || a===0) throw new Error( 'cant divide by 0! sorry');
    else return a/b;
}
throw new Error('Operation is not valid');

};

try{
    console.log(calculator(1,3, 'add'));
    console.log(calculator(1,0, 'divide'));
}catch(e){
    console.log('Something went wrong', e);
}


console.log(process.argv);