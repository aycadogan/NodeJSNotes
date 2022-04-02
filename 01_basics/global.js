//Global Object

// console.log(global);

setTimeout(() => {
    console.log('in the timeout');
    clearInterval(int)
}, 3000);

const int = setInterval(() => {
    console.log('in the interval');
},1000)

console.log(__dirname); //get absolute path of the current folder
console.log(__filename); //get absolute path of the current folder with file name

