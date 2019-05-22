// classic import
// const Log = require('./helpers/log.js');
// const Files = require('./helpers/file.js');

// import from folder
// const Log = require('./helpers');
// const Files = require('./helpers');

// barrel import
const Helper = require('./helpers/helper.module');
Helper.log.info('started');

// or
// const { Log, Files } = require('./helpers/helper.module');
// Log.info('started');