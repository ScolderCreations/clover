import * as func from '../resources/builtins.js'
import { execBuiltin } from './commands.mjs'

export function execToken(tokenObject) {
  switch(tokenObject['token']) {
    case 'consolelog':
      execBuiltin('consolelog')
    
  }
}