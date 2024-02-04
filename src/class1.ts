let nobody = {};

// console.log(person1.firstName)

type Person = {
	firstName: string;
	lastName: string;
	age?: number;
};

let person1: Person = {
	firstName: 'Franz',
	lastName: 'Liszt',
	age: 23,
};

let objectType: {
	prop1: string;
	prop2: number;
	prop3: boolean;
};

function greetByFullName(person: Person) {
	console.log(
		`Pleased to meet you, ${person.firstName} ${person.lastName}! May I call you ${person.firstName}?`
	);
}

greetByFullName(person1);

greetByFullName({
	firstName: 'Franz',
	lastName: 'Liszt',
	age: 23,
});
