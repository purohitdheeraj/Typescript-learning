let k: number = 10;
let pi: number = 3.1415;
let greetings: string = "Hello";
let message: string = "Hare Krishna";
let isConnected: boolean = true;

let person: object = {
	name: "Jagannath",
	hairColor: "Black",
};

// array - generic types syntax (alternative syntax)
let numbers: Array<number> = [1, 2, 3];
let personData: Array<any> = [10, "krishna"];

// tuples - diff peices of data
let personTuple: [string, number, boolean] = [
	"Krishna",
	10,
	false,
];

let tupleGeneric: [Array<number>, string] = [
	[1, 2, 3],
	"Ram",
];

// any type - not a good practice
let something: any = "Hello";
something = 32;

let nothing: undefined = undefined;
let notheing: null = null;

// never shows dev does something wrong

let myArr: never[] = [];
