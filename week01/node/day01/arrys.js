const person = {
    username : 'Shreyash',
    age : 24,
    greet () {
        console.log('Hi, I am '+  this.username);
    },
};

const hobbies = ['sports','Cooking'];

for(let hobby of hobbies){
    console.log(hobby);
}

console.log(hobbies.map(hobby => {
    return 'hobby -' + hobby;
}));
//return new array


console.log(hobbies);


const numbers = [-1,2,3,4,5];

const two = numbers.find((value) => value === 2);

console.log(two);


const filteredValue = numbers.filter(num => num % 3 === 0);
console.log(filteredValue);

const sum = numbers.reduce((n1, n2) => n1 + n2, 3);
console.log("Sum:", sum);

const hasNegative = numbers.some(n => n < 0);
console.log("Has negative?", hasNegative);