/* exported titleCase */
function titleCase(string) {
  var sentence = string.toLowerCase().split(' ');
  // console.log('value of sentence:', sentence);
  for (var i = 0; i < sentence.length; i++) {
    // debugger;
    if (sentence[i] !== 'in' && sentence[i] !== 'for' && sentence[i] !== 'and' && sentence[i] !== 'the' && sentence[i] !== 'of' && sentence[i] !== 'on' && sentence[i] !== 'to') {
      sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    if (sentence[i] === 'Javascript') {
      sentence[i] = sentence[i].slice(0, 4) + sentence[i][4].toUpperCase() + sentence[i].slice(5);
    }
    if (sentence[i] === 'Javascript:') {
      sentence[i] = sentence[i].slice(0, 4) + sentence[i][4].toUpperCase() + sentence[i].slice(5);
    }
    if (sentence[i] === 'Api') {
      sentence[i] = sentence[i].toUpperCase();
    }
    if (sentence[i].endsWith(':')) {
      sentence[i + 1] = sentence[i + 1][0].toUpperCase() + sentence[i + 1].slice(1);
    }
    if (sentence[i].includes('-d')) {
      sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1, 3) + sentence[i][3].toUpperCase() + sentence[i].slice(4);
    }
    if (sentence[i].includes('-t')) {
      sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1, 5) + sentence[i][5].toUpperCase() + sentence[i].slice(6);
    }
    if (sentence[0] === 'the') {
      sentence[0] = sentence[0][0].toUpperCase() + sentence[0].slice(1);
    }
  }
  return sentence.join(' ');
}
