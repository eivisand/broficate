wat = (word) => {
  if (word.indexOf('o') === 1) {
    return 'Bro' + word.substring(2, word.length);
  }
  if (word.indexOf('o') === 0 || word.indexOf('O') === 0) {
    return 'Bro' + word.substring(1, word.length);
  }
  if (word.indexOf('ro') === 1) {
    return 'Bro' + word.substring(3, word.length);
  }
   if (word.indexOf('au') === 0 || word.indexOf('Au') === 0) {
    return 'Bro' + word.substring(2, word.length);
  }
  return word;
}

module.exports = function(word) {
  if (typeof word !== 'string') {
    return 'Sry, bro'
  }
  return wat(word);
}
