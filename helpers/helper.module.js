/* Barrels - groups exports and imports  */
const Files = require('./file');
const Log = require('./log');

module.exports = {
    files: Files,
    log: Log
}

// export one by one
// module.exports = Files;
// module.exports = Log;

// or with ES6 default modules (transpiler needed)
// export default { Files, Log }


