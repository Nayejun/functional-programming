// 4. 접기 - reduce
// 1) min, max, min_by, max_by

//min
function _min(data) {
  return _reduce(data, function (a, b) {
    return a < b ? a : b;
  });
}

console.log(
    _min([1, 2, 3, 10, 5, -4])
);

//max
function _max(data) {
  return _reduce(data, function (a, b) {
    return a > b ? a : b;
  });
}

console.log(
    _max([1, 2, 3, 10, 5, -4])
);

//_min_by
function _min_by(data) {
  return _reduce(data, function (a, b) {
    return iter(a) < iter(b) ? a : b;
  });
}

console.log(
    _min_by([1, 2, 4, 10, 5, -4], Math.abs)
);

//_max_by
function _max_by(data) {
  return _reduce(data, function (a, b) {
    return iter(a) > iter(b) ? a : b;
  });
}

console.log(
    _max_by([1, 2, 4, 10, 5, -4], Math.abs)
);

let _min_by = _curryr(_min_by),
    _max_by = _curryr(_max_by);

_go(users,
    _filter(user => user.age >= 30),
    _min_by(users, function (user) {
    }), console.log);

_go(users,
    _reject(user => user.age >= 30),
    _max_by(users, function (user) {
    }), console.log);
// 2) group_by, push
// 3) count_by, inc