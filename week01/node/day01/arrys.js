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