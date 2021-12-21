// 2. group_by
let users = [
  {id: 1, name: 'ID', age: 36},
  {id: 2, name: 'BJ', age: 32},
  {id: 3, name: 'JM', age: 32},
  {id: 4, name: 'PJ', age: 27},
  {id: 5, name: 'HA', age: 25},
  {id: 6, name: 'JE', age: 26},
  {id: 7, name: 'JI', age: 31},
  {id: 8, name: 'MP', age: 23}
];

// let users2 = {
//   36: [{id: 1, name: 'ID', age: 36}],
//   32: [{id: 2, name: 'BJ', age: 32}, {id: 3, name: 'JM', age: 32}],
//   23 : [],
//   ...
// }
function _push(obj, key, val) {
  (obj[key] = obj[key] || []).push(val)
  return obj;
}

let _group_by = _curryr(function (data, iter) {
  return _reduce(data, function (grouped, val) {
    return _push(grouped, iter(val), val);
  }, {});
});

_go(users,
    _group_by(function (user) {
      return user.age;
    }),
    console.log);

_go(users,
    _group_by(function (user) {
      return user.age - user.age % 10;
    }),
    console.log);

let _head = function (list) {
  return list[0];
};

_go(users,
    _group_by(_pipe(_get('name'), _head)),
    console.log);

_group_by(users, function (user) {
  return user.age;
});

//3. count_by
let _inc = function (count, key) {
  count[key] ? count[key]++ : 1;
  return count;
};
let _count_by = _curryr(function (data, iter) {
  return _reduce(data, function (count, val) {
    return _inc(count, iter(val));
  }, {});
});
console.log(_count_by(users, function (user) {
      return user.age - user.age % 10;
    })
);