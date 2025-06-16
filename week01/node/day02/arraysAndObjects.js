const person = {
    username :'shreyash',
    age : 24,
    greet () {
        console.log('hello there i am ' +this.username);
    }
}

person.greet();

const sports = ['football','cricket'];


//adding the new element to the arrays end
sports.push('running');
//not adding this on to the constant adding it to where constent is pointing

sports.map(sport => console.log(sport));

console.log(sports);


const copyArray = sports.slice();
// no arrguments so it will copy all the elenents which is present inside the array.

const newarray = [sports];
//nested array

const newarrayWithSpreadOperater= [...sports];
//nested array


const newperson = {...person};
//spread operater can also work with the objects



const array = (arg1,arg2,arg3) =>{
    return [arg1,arg2,arg3];
}
//array with arguments but not flexible when want to pass 4th arg need to go for rest operater


//spread operater
const array1= (...args) =>{
    return args;
}
//array with arguments but not flexible when want to pass 4th arg need to go for rest operater



console.log(copyArray);
console.log(newarray);
console.log(newarrayWithSpreadOperater);
console.log(newperson);
console.log(array(1,2,3));
console.log(array1(1,2,3,4,5));




