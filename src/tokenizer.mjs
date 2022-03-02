import { token } from '../lib/tokens.mjs';

function tokenize(str) {
  var tr = Array()
  var currentLetter='', currentText='';
  for (let i = 0; i < str.length; i++) {
    currentLetter = str[i];
    currentText+=currentLetter;
    if (token.includes(currentText)) {
      tr.push(token)
    }
  }
}