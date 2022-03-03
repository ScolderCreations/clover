export function randomInt(floor, ceiling) {
  var _num = Math.random();
  var _mul = Math.ceil(_num * (ceiling - floor));
  return _mul + floor;
}

export function print(any) {
  var $ = any;
  console.log($);
}
