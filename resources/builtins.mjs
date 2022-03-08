export function randomInt(floor, ceiling) {
  if (typeof floor == "Array") {
    ceiling = floor[1], floor = floor[0];
  }
  var _num = Math.random();
  var _mul = Math.ceil(_num * (ceiling - floor));
  return _mul + floor;
}

export function print(any) {
  try { console.log(any); } catch {return false}
  return true
}

export function cprocess() {
  var ret = new Object();
  ret.platform = process.platform;
  ret.arch = process.arch;
  ret.dir = process.cwd;
  ret.env = process.env;
  ret.params = process.execArgv;
  ret.quit = process.quit;
  ret.version = '0.0.1'; // change with version 
  return ret;
}

export function joinstr() {
  var $ret = String();
  for (let $ of arguments) {
    $ret = $ret + $
  }
  return $ret;
}