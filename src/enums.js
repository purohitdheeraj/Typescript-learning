// 2 way bindings

var fruit;
(function (Fruit) {
	Fruit[(Fruit['Avocado'] = 0)] = 'Avocado';
	Fruit[(Fruit['Banana'] = 1)] = 'Banana';
	Fruit[(Fruit['Guava'] = 2)] = 'Guava';
	Fruit[(Fruit['Kiwi'] = 3)] = 'Kiwi';
	Fruit[(Fruit['Mango'] = 4)] = 'Mango';
	Fruit[(Fruit['Orange'] = 5)] = 'Orange';
	Fruit[(Fruit['Pineapple'] = 6)] = 'Pineapple';
	Fruit[(Fruit['Pomelo'] = 7)] = 'Pomelo';
	Fruit[(Fruit['Strawberry'] = 8)] = 'Strawberry';
})(Fruit || (Fruit = {}));

// 2 way bindings

//  result
const enumsBinding = {
	0: 'Avocado',
	1: 'Banana',
	2: 'Guava',
	3: 'Kiwi',
	4: 'Mango',
	5: 'Orange',
	6: 'Pineapple',
	7: 'Pomelo',
	8: 'Strawberry',
	Avocado: 0,
	Banana: 1,
	Guava: 2,
	Kiwi: 3,
};
