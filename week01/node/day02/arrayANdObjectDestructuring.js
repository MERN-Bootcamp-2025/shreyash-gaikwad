const person = {
    uname : 'Shreyash',
    age : 24,
    greeting (){
        console.log('Hi, I am '+ this.uname);
    }
}

const hobbies = ['football', 'cricket'];

const printName = (personData) => {
    console.log(personData.uname);
}

printName(person);

//with the object destructuring 
//need the same variable name from object
const printNames = ({uname,age}) => {
    console.log('Hi, I am '+ uname + " and My age is "+ age);
}

printNames(person);



//array destructuring
//no need to have same variable names
const [hobby1,hobby2] = hobbies;
console.log(hobby1,hobby2);