'use stirct';
const x = '23';
if (x === 23);
// BUG FIXME
//------------------------

//think like developer
const temperature = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5]
//find temp amplititide(min-max)
//remove the error

const calctemp=function(temp){
    let max=temperature[0]
    let min=temperature[0]
    for(let i=0; i<temperature.length; i++){
        
        if(temperature[i]!==Number)continue;
if(temperature[i]>max){
    max=temperature[i];
};
if(temperature[i]<min) min=temperature[i]
    };
    console.log(max, min)
    return min-max;
};
const ampli=calctemp(temperature);
console.log(ampli);

const arr1=['a','b','c'];
const arr2=['d','f','e'];
const arr3=arr1.concat(arr2);
console.log(arr3);
//-----------------------------------------------

//debuging with the console
const measureKelvin=function(){
    const measurment={
        type:'temp',
        unit:'celsius',
        value:Number(prompt('Degrees celsius:'))
    }
    console.log(measurment);
    console.table(measurment);
    const kelvin=measurment.value+273;
    return kelvin;
  }
  console.log(measureKelvin());
  console.warn(measureKelvin());
  console.error(measureKelvin());
//------------------------------------------------

  const arr1=[17,21,23];
const arr2=[12, 5, -5, 0, 4];
const printForcast=function(array){
  let str='' 
for(let i=0;i<array.length;i++) {
    
  str+=`${array[i]}°C in ${i+1}days...`; 
}
console.log('...'+str);
}

console.log(printForcast(arr2));