'use strict';

import { token } from "../resources/tokens.mjs"; // get tokens

/** 
 * @param {string} str
 */

export default function tokenize(str, params) {
  var tr = Array();
  var ras = String(); // random access string
  var ram = Number(); // random access number
  var currentLetter = "",
    currentText = "";
  for (let i = 0; i < str.length; i++) {
    // for index (char) of code
    currentLetter = str[i];
    currentText += currentLetter;
    if (currentLetter.match(/[ ;\s\n]/)) {
      // if is whitespace
      if (!!currentText) tr.push(JSON.parse
        (`{"${currentText}": "custom"}`)
      );
      currentText = "";
    }
    if (currentLetter.match(/["']/)) {
      i++;
      ras = currentLetter;
      currentLetter = str[i];
      currentText += currentLetter;
      while (!currentLetter.match(ras)) {
        i++;
        currentLetter = str[i];
        currentText += currentLetter;
      }
    }
    if (token.keys.includes(currentText)) {
      ras = currentText;
      currentText = '';
      if ((str[i + 1] + str [i + 2]).match('^\s?\()?')) { // whitespace? and paren
        ram = 1;

        while (ram > 0) {
          i++
          currentLetter = str[i];
          currentText += currentLetter;
          switch (currentLetter) {
            case '(':
              ram++;
              break;
            case ')':
              ram--;
              break;
          }

        tkParam = currentText;
      }
      var tk = JSON.parse(
        `{"token": "${token[currentText][0]}", "params": "${token[currentText][1]}"}`
      ); // eg {token: consolelog}
      tr.push(tk);
    }
  }
  return tr;
}

