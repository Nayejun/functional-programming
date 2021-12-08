function _filter(list, predi) {
  let new_list = [];
  _each(list, function (val) {
    if (predi(val)) new_list.push(val);
  });
  return new_list;
}

// 명령적인 코드보다는 보다 선언적인 코드가 된 모습
// -> 더 단순해지기에 실수가 줄어듦.
function _map(list, mapper) {
  let new_list = [];
  _each(list, function (val) {
    new_list.push(mapper(val));
  });
  return new_list;
}

function _each(list, iter) {
  for (let i = 0; i < list.length; i++) {
    iter(list[i]);
  }
  return list;
}