// 2. _go
// _pipe 의 즉시 실행 버전
function _go(arg) {
  let fns = _rest(arguments);
  return _pipe.apply(null, fns)(arg);
}
_go(
    function (a) { return a + 1; }, // 1 + 1
    function (a) { return a * 2; }, // 2 * 2
    function (a) { return a * a; },  // 4 * 4
    console.log
);