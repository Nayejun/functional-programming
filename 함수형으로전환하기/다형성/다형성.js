console.log(
    [1, 2, 3, 4].map(function (val) {
      return val * 2;
    })
);
console.log(
    [1, 2, 3, 4].filter(function (val) {
      return val % 2;
    })
);
console.log(document.querySelectorAll('*'));
console.log(
    // document.querySelectorAll('*').map(function (node) {
    //   return node.nodeName;
    // })
    _map(document.querySelectorAll('*'), function (node) {
      return node.nodeName;
    })
);
_map([1, 2, 3, 4], function (v) {
  return v + 10;
})