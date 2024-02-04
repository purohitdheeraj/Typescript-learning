enum Fruit {
	Avocado = 'avocado',
	Banana = 'banana',
	Guava = 'guava',
	Kiwi = 'kiwi',
	Mango = 'mango',
	Orange = 'orange',
	Pineapple = 'pineapple',
	Pomelo = 'pomelo',
	Strawberry = 'strawberry',
}

const allFruits = [
	{ name: Fruit.Avocado, caloriesPer100g: 167 },
	{ name: Fruit.Banana, caloriesPer100g: 89 },
	{ name: Fruit.Guava, caloriesPer100g: 68 },
	{ name: Fruit.Kiwi, caloriesPer100g: 64 },
	{ name: Fruit.Mango, caloriesPer100g: 60 },
	{ name: Fruit.Orange, caloriesPer100g: 46 },
	{ name: Fruit.Pineapple, caloriesPer100g: 50 },
	{ name: Fruit.Pomelo, caloriesPer100g: 38 },
	{ name: Fruit.Strawberry, caloriesPer100g: 32 },
];

/** @returns The number of calories in a smoothie containing `desiredFruits`. */
function smoothieCalories(desiredFruits: Fruit[]) {
	return allFruits
		.filter(
			(fruit) => desiredFruits.indexOf(fruit.name) !== -1
		)
		.reduce(
			(total, { caloriesPer100g }) =>
				total + caloriesPer100g,
			0
		);
}

const cals = smoothieCalories([
	Fruit.Mango,
	Fruit.Avocado,
	Fruit.Mango,
]);
console.log(`My favorite smoothie has ${cals} calories.`);

function printSmoothieRecipe(desiredFruits: Fruit[]) {
	console.log('My Favorite Smoothie');
	console.log('Calories:', smoothieCalories(desiredFruits));
	console.log('Ingredients:');
	for (const fruit of desiredFruits) {
		console.log('  - One', fruit);
	}
	console.log('Blend and serve.');
}

printSmoothieRecipe([
	Fruit.Mango,
	Fruit.Pineapple,
	Fruit.Orange,
]);
