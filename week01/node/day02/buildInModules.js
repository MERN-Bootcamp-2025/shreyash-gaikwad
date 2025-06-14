const fs = require('fs');
const os = require('os');
const path = require('path');
const uname = require('./utilityFunction');
const filePath = path.join(__dirname, 'info.txt');
const name='shreyash';
const age=24;





const fileContent = `Name: ${name}\nAge: ${age}`;
console.log(fs.writeFileSync('file.txt',`hello welcome to the node.js modules`));
console.log('os type : ',os.type(),'updated time' ,os.uptime());
console.log(uname.greet(name));
