// 1. 순수함수이다, 항상 동일한 인자를 주면 동일한 결과를 return 하고
// 2. 부수효과가 없다(외부의 상태에 영향)
function add(a, b) {
  return a + b;
}

console.log(add(10, 5));
console.log(add(5, 10));
let c = 10;

// 변화가 있을 수 있기에 순수함수가 아니다
function add2(a, b) {
  return a + b + c;
}

console.log(add2(1, 1));
console.log(add2(2, 2));
console.log(add2(3, 3));
c = 20;
console.log(add2(1, 1));
console.log(add2(2, 2));
console.log(add2(3, 3));

// 부수효과가 있는 함수, 순수함수가 아님
c = 20;

function add3(a, b) {
  c = b; // c를 b로 덮어썼다 => 외부의 상태에 영향을 주었다
  return a + b;
}

console.log('c : ' + c); // 원래 c의 값은 20임
console.log(add3(10, 25)); // c에 25가 들어가버림.
console.log('c : ' + c); // 그래서 c가 25로 변경됨.

// 1. 순수함수가 아님
let obj1 = {val: 10};

function add4(obj, b) {
  obj.val += b;
}

add4(obj1, 20);
console.log(obj1.val);

// 2. 순수함수로 만들어보자
obj1 = {val: 10};

function add5(obj, b) {
  return {val: obj.val + b}
}

console.log(obj1.val);
let obj2 = add5(obj1, 20);
console.log(obj1.val);
console.log(obj2.val);

// JS는 변수에 함수를 담을 수 있다
// 일급함수
let f1 = function(a) {return a * a;};
console.log(f1);

let f2 = add;
console.log(f2);

function f3(f) {
  return f();
}
console.log(f3(function() {return 10;}));
console.log(f3(function() {return 20;}));

function add_maker(a) {
  return function(b) {
    return a + b;
  }
}

let add10 = add_maker(10);

console.log(add10(20));

let add7 = add_maker(7);
let add15 = add_maker(15);

console.log(add7(10));
console.log(add15(10));