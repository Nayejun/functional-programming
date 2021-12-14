var a = function (user) { return user.age >= 30; };
var a = user => user.age >= 30;

var add = function (a, b) { return a + b; };
var add = (a, b) => a + b;
var add = (a, b) => {
  return a + b;
};
var add = (a, b) => ({ val: a + b });
