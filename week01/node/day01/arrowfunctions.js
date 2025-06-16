let username = 'shreyash';
const age = 24 ;
let hasHobbies = true;

username='ram';

const summarizeUser= (userName,userAge,userHasHobbies)=>{
    return (
        'Name is '+userName + ' Age is ' +userAge + ' has Hobbies '+userHasHobbies
    );
}

// const add = (a,b)=> {
//     return a+b;
// }

const add =(a,b) => a+b ;
//only arrow function with one statement

const addOne = a => a+1;
//only for one argument

const addNothing = () => 1+2;

console.log(addNothing());

console.log(addOne(1));

console.log(add(1,2));

console.log(summarizeUser(username,age,hasHobbies));