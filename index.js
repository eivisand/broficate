var broficate = require('./broficate');

var words = process.argv.slice(2, process.argv.length);
var broWords = words.map(broficate).join(' ');

console.log(broWords);
