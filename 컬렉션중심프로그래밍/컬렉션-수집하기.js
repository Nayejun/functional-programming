//컬렉션 : 리스트와 배열 등의 데이터들을 다루는 것
//컬렉션 중심 프로그래밍의 4가지 유형과 함수

//1. 수집하기 - map, values, pluck ..etc
//2. 거르기 - filter, reject, compact, without ..etc
//3. 찾아내기 - find, some, every ..etc
//4. 접기 - reduce, min, max, group_by, count_by ..etc

//1. 수집하기 - map
// 1) values
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

//1. 수집하기 - map
function _values(data) {
  return _map(data, _identity);
}

function _identity(val) {
  return val;
}

// let _values = _map(_identity);
// let a = 10;
// console.log(_identity(a));

console.log(users[0]);
// console.log(_keys(users[0]));
// console.log(_values(users[0]));

//2) pluck
function _pluck(data, key) {
  return _map(data, function (obj) {
    return obj[key];
  });
}

_pluck(users, 'age');

console.log(_pluck(users, 'age'));
console.log(_pluck(users, 'name'));
console.log(_pluck(users, 'id'));