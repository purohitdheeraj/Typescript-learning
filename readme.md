Typescript - basics

- tsc is static type for JS
- used at compile time

Main Types

- string , number, boolean
- arrays, objects, tuples
- Generic

const genericArray: Array<number> = [10, 20, 30]
type syntax is syntax sugar for generic one

> const typeArray: number[] = [100,200,300]

Tuples
const items:[string, number] = ["krishna", 108]
const items:[[Array<number>],string] = ["krishna", 108]

let personTuple: [string, number, boolean] = ["Krishna",10,false];

other imp stuff while working with tsc

- tsconfig.json (settings for typescript project)

  - build -> compilerOptions
  - src -> includes
  - esversion -> target

- tslint to enforce good coding practices

some learnings

- typescript is used in development and not in production
- transpiles to js while publishing the app

some imp commands
` npm i tslint-config-airbnb tslint --save-dev`

after installing lint to check the lint errors
`npx tslint --project .`

`tsc`

In TypeScript object types, the comma (,) and semicolon (;) separators between properties are interchangeable. All of these spellings denote the same type:

let objectType : {
prop1: string;
prop2: number,
prop3:boolean;
}

let person1: {firstName: string, age: number};
let person1: {firstName: string; age: number};
let person1: {firstName: string; age: number;};

// A variable `person` with both a type annotation and an initializer
let person: {
firstName: string;
age: number;
} = {
firstName: "Franz",
age: 23,
};




Object Types Are Not Exact

