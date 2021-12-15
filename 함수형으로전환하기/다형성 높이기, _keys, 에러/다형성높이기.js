// _each의 외부 다형성 높이기
// 1. _each에 null을 넣어도 에러가 나지 않게
_each(null, console.log);
console.log(_filter(null, function (v) {
  return v;
}));
// 2. _keys 만들기
console.log(Object.keys({name: 'ID', age: 33}));
console.log(Object.keys([1, 2, 3, 4]));
console.log(Object.keys(10));
console.log(Object.keys(null)); //ERROR

function _is_object(obj) {
  return typeof obj == 'object' && !!obj;
}

function _keys(dbj) {
  return _is_object(obj) ? Object.keys(obj) : [];
}

// 4. _each 외부 다형성 높이기
_each({
  13: 'ID',
  19: 'ID',
  20: 'ID'
}, function (name) {
  console.log(name);
});
console.log(_map({
  13: 'ID',
  19: 'HD',
  29: 'YD'
}, function (name) {
  return name.toLowerCase();
}));
_go({
      1: users[0],
      3: users[2],
      5: users[4]
    },
    _map(function (user) {
      return user.name.toLowerCase();
    }),
    console.log
)

//_each
function _each(list, iter) {
  let keys = _keys(list);
  for (let i = 0, len = keys.length; i < len; i++) {
    iter(list[keys[i]]);
  }
  return list;
}

//_map
function _map(list, mapper) {
  let new_list = [];
  for (let i = 0; i < list.length; i++) {
    new_list.push(mapper(list[i]));
  }
  return new_list;
}