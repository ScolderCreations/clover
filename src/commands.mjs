import * as builtins from '../resources/builtins.mjs';
import { token } from '../resources/tokens.mjs';
/**
 * @param {string} func 
 * @param {Array} params 
 */
export function execBuiltin(func, params) {
  if (builtins[func] != undefined) {
    return builtins[func](params);
  }
}