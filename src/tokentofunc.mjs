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
  }
}