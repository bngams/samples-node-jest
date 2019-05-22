let Promise = require('bluebird');
let fs = require("fs");
Promise.promisifyAll(fs); // keep initial methods + Async

// initial readFile => with blubird promisify readFileAsync 
fs.readFileAsync('index.js')
    .then((data) => {
        console.log(data)
    })
    .catch(err => {
        console.log(err);
    })