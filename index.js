var broficate = require('./broficate');

var words = process.argv.slice(2, process.argv.length);
var broWords = words.map(broficate);

broWords.forEach((word) => console.log(word));
