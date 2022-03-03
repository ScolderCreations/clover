import { token } from "../resources/tokens.mjs"; // get tokens

function tokenize(str) {
  var tr = Array();
  var currentLetter = "",
    currentText = "";
  for (let i = 0; i < str.length; i++) { // for index (char) of code
    currentLetter = str[i];
    currentText += currentLetter;
    if (/[ ;\s\n]/.match(currentLetter)) { // if is whitespace
      currentText = "";
    }
    if (token.keys.includes(currentText)) {
      var tk = JSON.parse(`{${token[currentText][0]}: ${token[currentText][1]}}`); // {token: type}
      tr.push(tk);
    }
  }
  return tr;
}
