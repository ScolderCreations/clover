import * as builtins from '../resources/builtins.mjs';
/**
 * @param {string} func 
 * @param {Array} params 
 */
function exec(func, params) {
  if (builtins[func] != undefined) {
    return builtins[func]();
  }
}