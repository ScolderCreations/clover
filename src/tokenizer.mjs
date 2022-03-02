import { token } from "../lib/tokens.mjs";

function tokenize(str) {
  var tr = Array();
  var currentLetter = "",
    currentText = "";
  for (let i = 0; i < str.length; i++) {
    currentLetter = str[i];
    currentText += currentLetter;
    if (/[ ;\s\n]/.match(currentLetter)) {
      currentText = "";
    }
    if (token.keys.includes(currentText)) {
      var tk = new Object(token[currentText][0], token[currentText][1]);
      tr.push(tk);
    }
  }
}
