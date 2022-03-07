import { execBuiltin } from './commands.mjs'

export function execToken(tokenObject) {
  switch(tokenObject['token']) {
    case 'consolelog':
      return print(tokenObject.params);
      
  }
}