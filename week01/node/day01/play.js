var name = 'shreyash';
var age = 24 ;
var hasHobbies = true;

function summarizeUser(userName,userAge,userHasHobbies){
    return (
        'Name is '+userName + ' Age is ' +userAge + ' has Hobbies '+userHasHobbies
    );
}

console.log(summarizeUser(name,age,hasHobbies));