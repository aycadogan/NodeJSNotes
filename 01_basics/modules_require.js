// const {xyz} = require('./people') //import people file from this module file

// console.log(xyz);
// console.log(xyz.people);
// console.log(xyz.ages);

const { people, ages } = require('./people')
console.log(people,ages);

const os = require('os')
console.log(os.platform(), os.homedir());