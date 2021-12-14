// let은 같은 변수를 다시 선언할 수 없어서 var로 변경
var a = function (user) { return user.age >= 30; };
var a = user => user.age >= 30;

var add = function (a, b) { return a + b; };
var add = (a, b) => a + b;
var add = (a, b) => {
  return a + b;
};
var add = (a, b) => ({ val: a + b });
