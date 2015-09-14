prepend = (needle, replacement) => (word) => {
  if (word.indexOf(needle) === 0) {
    return replacement + word.substring(needle.length, word.length)
  }
  return word;
}

var prependFunctions = [
  prepend('Pro', 'Bro'),
  prepend('pro', 'bro'),
  prepend('Po', 'Bro'),
  prepend('po', 'bro'),
  prepend('Ro', 'Bro'),
  prepend('ro', 'bro'),
  prepend('o', 'bro'),
  prepend('O', 'Bro')
];

module.exports = function(word) {
  if (typeof word !== 'string') {
    return 'Sry, bro'
  }
  prependFunctions.forEach((fn) => {
    word = fn(word)
  });

  return word;
}
