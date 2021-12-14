// 1. _pipe
// 함수를 return 하는 함수
function _pipe() {
  let fns = arguments;
  return function (arg) {
    return _reduce(fns, function (arg, fn) {
      return fn(arg);
    }, arg);
  }
}

let f1 = _pipe(
    function (a) { return a + 1; }, // 1 + 1
    function (a) { return a * 2; }, // 2 * 2
    function (a) { return a * a; }  // 4 * 4
);
console.log(f1(1)); // a = 1

// =================== reduce, each ===================
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

function _each(list, iter) {
  for (let i = 0; i < list.length; i++) {
    iter(list[i]);
  }
  return list;
}