'use strict';

import { token } from "../resources/tokens.mjs"; // get tokens

/** 
 * @param {string} str
 */

export default function tokenize(str) {
  var tr = Array();
  var ras = String(); // random access string
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
      var tk = JSON.parse(
        `{${token[currentText][0]}: ${token[currentText][1]}}`
      ); // {token: type}
      tr.push(tk);
    }
  }
  return tr;
}
