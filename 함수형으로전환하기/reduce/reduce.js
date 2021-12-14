// 로직을 축약시킬 수 있다
let slice = Array.prototype.slice;
function _rest(list, num) {
  return slice.call(list, num || 1);
}
function _reduce(list, iter, memo) {
  if (arguments.length == 2) {
    memo = list[0];
    list = _rest(list);
  }
  _each(list, function (val) {
    memo = iter(memo, val);
  });
  return memo;
}

console.log(
    _reduce([1, 2, 3], add, 10)
);// 16

// 세번째 인자를 생략하고 하는 법
console.log(
    _reduce([1, 2, 3], add)
);
// 6
add(add(1,2),3);