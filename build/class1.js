let nobody = {};
let person1 = {
    firstName: 'Franz',
    lastName: 'Liszt',
    age: 23,
};
let objectType;
function greetByFullName(person) {
    console.log(`Pleased to meet you, ${person.firstName} ${person.lastName}! May I call you ${person.firstName}?`);
}
greetByFullName(person1);
greetByFullName({
    firstName: 'Franz',
    lastName: 'Liszt',
    age: 23,
});
