import { add } from './utils';

// console.log(`the sum of 1 and 2 is ${add(1, 2)}`);

const greeting: string = 'Hare Krishna';
const x: string = '10';

// in js only values had types and not variables
// in tsc variables are having types
// static typing

// console.log(greeting);

// function
function double(x: number): number {
	return x * 2;
}

function sayHello(): void {
	// console.log('Hare krishna');
}

// tsc will infer the return type as well
// recognise the type
// const triple = (x: number) => x * 3;

// function declaration hai apan jiska param type string hai and return type bhi string hai
let triple: (t: string) => number;

triple = (x: string) => Number(x);

let a = triple('5');
a;

// Arrays
let names: string[] = ['Krishna', 'Ram', 'Radhe'];
let number: number[] = [];
number.push(8);
number;

type devType = string;

const newDev: devType = 'Krishna';

// union type
const oldDev: string | boolean = false;

const literalType: 'krishna' | 'ram' = 'ram';

console.log(literalType);

enum objProp {
	key1 = '5',
	key2 = '10',
}

interface dev {
	javascript: boolean;
	'tech stack': string;
	experience: number;
}

const dev2: dev = {
	javascript: true,
	'tech stack': 'MeRN',
	experience: 5,
};
