// "use strict";
// // Source: https://fdc.nal.usda.gov/
// const allFruits = [
//     { name: "Avocado", caloriesPer100g: 167 },
//     { name: "Banana", caloriesPer100g: 89 },
//     { name: "Guava", caloriesPer100g: 68 },
//     { name: "Kiwi", caloriesPer100g: 64 },
//     { name: "Mango", caloriesPer100g: 60 },
//     { name: "Orange", caloriesPer100g: 46 },
//     { name: "Pineapple", caloriesPer100g: 50 },
//     { name: "Pomelo", caloriesPer100g: 38 },
//     { name: "Strawberry", caloriesPer100g: 32 },
// ];
// /** @returns The number of calories in a smoothie containing `desiredFruits`. */
// function smoothieCalories(desiredFruits) {
//     return allFruits
//         .filter((fruit) => desiredFruits.includes(fruit.name))
//         .reduce((total, { caloriesPer100g }) => total + caloriesPer100g, 0);
// }
// const cals = smoothieCalories(["Banana", "Pineapple", "Orange"]);
// console.log(`My favorite smoothie has ${cals} calories.`);
// /** @returns True if a smoothie with the given `ingredients` has equal or fewer calories than the `calorieBudget`, or false otherwise. */
// function checkSmoothieForDiet(ingredients, calorieBudget) {
//     const calories = smoothieCalories(ingredients);
//     if (calories > calorieBudget) {
//         return false;
//     }
//     return true;
// }
// const ingredients = ["Kiwi", "Mango", "Strawberry"];
// const maxCalories = 200;
// if (checkSmoothieForDiet(ingredients, maxCalories)) {
//     console.log("Hooray, a smoothie with", new Intl.ListFormat().format(ingredients), "contains less than", maxCalories, "calories!");
// }
// else {
//     console.log("Sorry, a smoothie with", new Intl.ListFormat().format(ingredients), "contains more than", maxCalories, "calories.");
// }
