import { execBuiltin } from './commands.mjs'
import * as c from '../resources/builtins.mjs'

export function execToken(tokenObject) {
  switch(tokenObject['token']) {
    case 'consolelog':
      return c.print(tokenObject.params);
    case 'randint':
      return c.randomInt(tokenObject.params);
    case 'process':
      return c.cprocess();
    case 'openfile':
      return c.openfile(tokenObject.params);
  }
}

export function midOperator(tokenObject, l, r) {
  switch(tokenObject['token']) {
    case '+':
      return l + r;
    case '-':
      return l - r;
    case '==':
      return (l == r);
    case '/':
      return l / r;
    case '*':
      return l * r;
    case '%':
      return l % r;
    case '||':
      return (l || r);
    case '!=':
      return (l != r);
    case '!|':
      return (!(l || r));
    case '&&':
      return (l && r);
    case '!&':
      return (!(l && r));
  }
}