// console.log(`the sum of 1 and 2 is ${add(1, 2)}`);
const greeting = 'Hare Krishna';
const x = '10';
// in js only values had types and not variables
// in tsc variables are having types
// static typing
// console.log(greeting);
// function
function double(x) {
    return x * 2;
}
function sayHello() {
    // console.log('Hare krishna');
}
// tsc will infer the return type as well
// recognise the type
// const triple = (x: number) => x * 3;
// function declaration hai apan jiska param type string hai and return type bhi string hai
let triple;
triple = (x) => Number(x);
let a = triple('5');
a;
// Arrays
let names = ['Krishna', 'Ram', 'Radhe'];
let number = [];
number.push(8);
number;
const newDev = 'Krishna';
// union type
const oldDev = false;
const literalType = 'ram';
console.log(literalType);
var objProp;
(function (objProp) {
    objProp["key1"] = "5";
    objProp["key2"] = "10";
})(objProp || (objProp = {}));
const dev2 = {
    javascript: true,
    'tech stack': 'MeRN',
    experience: 5,
};
export {};
