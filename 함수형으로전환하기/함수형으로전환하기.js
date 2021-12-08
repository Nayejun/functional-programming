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

//30세 이상
let temp_users = [];
for (let i = 0; i < users.length; i++) {
  if (users[i].age >= 30) {
    temp_users.push(users[i]);
  }
}
console.log(temp_users);

//30세 이상 이름
let names = [];
for (let i = 0; i < temp_users.length; i++) {
  names.push(temp_users[i].name);
}
console.log(names);

//30세 미만
let temp_users = [];
for (let i = 0; i < users.length; i++) {
  if (users[i].age < 30) {
    temp_users.push(users[i]);
  }
}
console.log(temp_users);

//30세 미만 나이
let ages = [];
for (let i = 0; i < temp_users.length; i++) {
  ages.push(temp_users[i].age);
}
console.log(ages);

function _filter(list, predi) {
  let new_list = [];
  for (let i = 0; i < list.length; i++) {
    if (predi(list[i])) {
      new_list.push(list[i]);
    }
  }
  return new_list;
}

function _map(list, mapper) {
  let new_list = [];
  for (let i = 0; i < list.length; i++) {
    new_list.push(mapper(list[i]));
  }
  return new_list;
}

console.log(
    _filter(users, function (user) {
      return user.age >= 30;
    }));

console.log(
    _filter(users, function (user) {
      return user.age < 30;
    }));

let over_30 = _filter(users, function (user) {
  return user.age >= 30;
});
console.log(
    _map(over_30, function (user) {
      return user.name;
    }));

let under_30 = _filter(users, function (user) {
  return user.age < 30;
});
console.log(
    _map(under_30, function (user) {
      return user.age;
    }));
/*
    console.log(
        _filter([1, 2, 3, 4], function(num) { return num % 2; }));
    console.log(
        _filter([1, 2, 3, 4], function(num) { return !(num % 2); }));
*/
console.log(
    _map(
        _filter(users, function (user) {
          return user.age >= 30;
        }),
        function (user) {
          return user.name;
        }));

console.log(
    _map(
        _filter(users, function (user) {
          return user.age < 30;
        }),
        function (user) {
          return user.age;
        }));

console.log(
    _map(
        _filter(users, user => user.age < 30),
        user => user.name));