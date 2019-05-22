// we create a module using callbacks
//uppercase.js
/******** UPPERCASE MODULE ********/
function uppercase(str, callback) {
    callback(str.toUpperCase())
}
module.exports = uppercase
/*********************************/