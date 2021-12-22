// 지연 평가를 시키고 유지 시키는(이어가는) 함수
//1) map
//2) filter, reject
let mi = 0;
let fi = 0;
_.go(
    _.range(200),
    L.map(function (val) {
      ++mi;
      return val * val;
    }),
    L.filter(function (val) {
      ++ fi;
      return val % 2;
    }),
    // L.take(5),
    L.some(function (val){
      return val > 100;
    }),
    console.log);
console.log(mi, fi);