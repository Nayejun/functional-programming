// 2. 거르기 - filter
console.log(
    _filter(users, function (user) {
      return user.age > 30;
    })
)

function _negate(func) {
  return function (val) {
    return !func(val);
  }
}

//reject
function _reject(data, predi) {
  return _filter(data, _negate(predi));
}

console.log(
    _reject(users, function (user) {
      return user.age > 30;
    })
)

//compact
let _compact = _filter(_identity);
console.log(_compact(1, 2, 0, false, null, {}));