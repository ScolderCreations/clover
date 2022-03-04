export function randomInt(floor, ceiling) {
  var _num = Math.random();
  var _mul = Math.ceil(_num * (ceiling - floor));
  return _mul + floor;
}

export function print(any) {
  try { console.log(any); } catch {return false}
  return true
}

export const cloverVersion = '0.0.1';

export const cProcess = function() {
  var ret = new Object();
  ret.platform = process.platform;
  ret.arch = process.arch;
  ret.dir = process.cwd;
  ret.data = process.env;
  ret.params = process.execArgv;
  ret.quit = process.quit;
  return ret;
}()