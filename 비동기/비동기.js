function square(a) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(a * a);
    }, 500);
  });
}
// function square(a) {
//   return a*a;
// }

// square(10)
//     .then(square)
//     .then(square)
//     .then(square)
//     .then(console.log);
//
// _.go(square(10),
//     square,
//     square,
//     square,
//     console.log);

let list = [2,3,4];
new Promise(function (resolve){
  (function recur(res){
    if(list.length === res.length) return resolve(res);
    square(list[res.length]).then(function (val){
      res.push(val);
      recur(res);
    });
  })([]);
}).then(console.log);