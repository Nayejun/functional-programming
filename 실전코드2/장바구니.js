let products = [
  {
    is_selected: true,
    name: '반팔',
    price: 10000,
    sizes: [
      {name: "L", quantity: 2, price: 0},
      {name: "XL", quantity: 3, price: 0},
      {name: "2XL", quantity: 2, price: 2000},
    ]
  },
  {
    is_selected: true,
    name: '후드티',
    price: 21000,
    sizes: [
      {name: "L", quantity: 3, price: -1000},
      {name: "2XL", quantity: 1, price: 2000},
    ]
  },
  {
    is_selected: false,
    name: '맨투맨',
    price: 16000,
    sizes: [
      {name: "L", quantity: 4, price: 0}
    ]
  },
];
//1. 모든 수량
let total_quantity = _reduce(function (tq, product) {
  return _.reduce(product.sizes, function (tq, size) {
    return tq + size.quantity;
  }, tq);
}, 0);

_.go(products,
    total_quantity,
    console.log);

//2. 선택된 총수량
_.go(products,
    _.filter(function (product) {
      return product.is_selected;
    }),
    total_quantity,
    console.log);

//3. 모든 가격
_.go(products,
    _.reduce(function (tp, product) {
      return _.reduce(product.sizes, function (tp, size) {
        return tp + (product.price) * size.quantity;
      }, tp);
    }, 0), console.log);