// 3. 커링
// 1) _curry,
function _curry(fn) {
  return function (a, b) {
    return arguments.length == 2 ? fn(a, b) : function (b) {
      return fn(a, b);
    };
  }
}

function _curryr(fn) {
  return function (a) {
    return arguments.length == 2 ? fn(a, b) : function (b) {
      return fn(a, b);
    };
  }
}

let add = _curry(function (a, b) {
  return a + b;
});
let sub = _curryr(function (a, b) {
  return a - b;
});
let add10 = add(10);
console.log(add10(5));
let add5 = add(5);
console.log(add5(4));

// 2) _get을 만들어 좀 더 간단하게 하기
let _get = _curryr(function (abj, key) {
  return abj == null ? undefined : obj[key];
});
console.log(
    _map(_fileter(users, function (user) {
      return user.age >= 30;
    }), _get('name'))
);
console.log(
    _map(
        _filter(users, function (user) {
          return user.age < 30;
        }), _get('age')
    )
);
// let user1 = users[0];
// console.log(user1.name);
// console.log(_get(user1, 'name'));
// console.log(_get(users[10], 'name'));