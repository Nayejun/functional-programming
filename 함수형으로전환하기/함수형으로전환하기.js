let users = [
  {id: 1, name: 'ID', age: 36},
  {id: 2, name: 'BJ', age: 63},
  {id: 3, name: 'JM', age: 45},
  {id: 4, name: 'PJ', age: 13},
  {id: 5, name: 'HA', age: 26},
  {id: 6, name: 'JE', age: 64},
  {id: 7, name: 'JI', age: 12},
  {id: 8, name: 'MP', age: 16}
];
// 1. 명령형 코드
//     1) 30세 이상인 users를 거른다
let temp_users = [];
for (let i = 0; i < users.length; i++) {
  if (users[i].age >= 30) {
    temp_users.push(users[i]);
  }
}
console.log(temp_users)
//     2) 30세 이상인 users의 names를 수집한다
let names = [];
for (let i = 0; i < temp_users.length; i++) {
  names.push(temp_users[i].name);
}
console.log(names);
//     3) 30세 미만인 users를 거른다
let temp_userss = [];
for (let i = 0; i < users.length; i++) {
  if (users[i].age >= 30) {
    temp_userss.push(users[i]);
  }
}
console.log(temp_userss)
//     4) 30세 미만인 users의 ages를 수집한다.
let ages = [];
for (let i = 0; i < temp_users.length; i++) {
  ages.push(temp_users[i].age);
}
console.log(ages);

// 2. _filter, _map으로 리팩토링
function _filter(users, predi) {
  let new_list = [];
  for (let i = 0; i < users.length; i++) {
    if (predi(users[i])) {
      new_list.push(users[i]);
    }
    return new_list;
  }
}

console.log(
    _filter(users, function (user) {
      return user.age >= 30;
    })
);
console.log(
    _filter(users, function (user) {
      return user.age < 30;
    })
);
console.log(
    _filter([1, 2, 3, 4], function (num) {
      return num % 2;
    })
);

console.log(
    _filter([1, 2, 3, 4], function (num) {
      return !(num % 2);
    })
);