var needles = [
  {
    target: 'o',
    pos: 1
  },
  {
    target: 'o',
    pos: 0
  },
  {
    target: 'ro',
    pos: 1
  },
  {
    target: 'au',
    pos: 0
  }
];

bro = (word, isCapitalized) => {
  var needle = needles.find((needle) => word.indexOf(needle.target) === needle.pos);
  if (!needle) {
    return word;
  }
  var bro = isCapitalized ? 'Bro' : 'bro';
  var index = needle.target.length + needle.pos;
  return bro + word.substring(index, word.length);
}

module.exports = function(word) {
  if (typeof word !== 'string') {
    return 'Sry, bro'
  }
  var isCapitalized = word.toUpperCase().charAt(0) === word.charAt(0);
  return bro(word.toLowerCase(), isCapitalized);
}
