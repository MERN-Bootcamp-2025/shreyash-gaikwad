setTimeout(()=>{
    console.log('Shreyash');
    featchData();
    // featchData(text => {
    //     // console.log('text');
    // })
    //anonymous arraw functiuon
},3000);

const featchData = callback => {
    setTimeout(() =>{
        console.log('its callback function data');
        // console.log(callback);
        //give output as undefined

    },1500);
}

console.log("hii,");
console.log('I Am');


// below here are promises

console.log('--------------------------------------------------------------------------------');
console.log('below here are promises:');

setTimeout(()=>{console.log('the is where promises starts');
    featchPromises().then(done => {console.log(done);
return featchPromises();}).then(done1 => console.log(done1)).then(done2 => console.log('---------------------------------------------------------------------------------'));
},1);

const featchPromises = () => {
//Promise constructor present in the js
const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('while using promise we can avoid using the nested callback to reduce complexsity')},1000)
});
return promise;
}