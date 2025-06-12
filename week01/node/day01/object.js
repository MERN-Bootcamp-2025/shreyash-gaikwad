const person = {
    username : 'Shreyash',
    age : 24,
    greet () {
        console.log('Hi, I am '+  this.username);
    },

    greetFirst : () => {
        console.log('Hi, I am '+  this.username);
    },
    //here this. consider the globel scope of globel node runtime scope

    greetAgain : function (){
        console.log('Hi, I am '+ this.username);
    }
};

console.log(person);
person.greet();
//to call function which is present inside object
person.greetFirst();

person.greetAgain();