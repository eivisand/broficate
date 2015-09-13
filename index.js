var broficate = require('./broficate');

var words = process.argv.slice(2, process.argv.length);
words.forEach(broficate);
