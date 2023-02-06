const cashRegister = (price, cash, cid) => {
  let change = Number((cash - price).toFixed(2));
  let changeCopy = change;
  const cashInDrawValue = Number(
    cid.reduce((acc, val) => acc + val[1], 0).toFixed(2)
  );

  if (cashInDrawValue > change) {
    let changeAlternatives = [];

    const fixedCurrencyValue = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];

    for (let i = 0; i < cid.length; i++) {
      if (change / fixedCurrencyValue[i] >= 1) {
        changeAlternatives.push(fixedCurrencyValue[i]);
      }
    }

    let yourChange = [];

    ca: for (let i = changeAlternatives.length - 1; i >= 0; i--) {
      let Quantity = Number(Math.floor(change / changeAlternatives[i])); //1

      if (Quantity < 1 || cid[i][1] === 0) {
        continue ca;
      }

      let value = Number((Quantity * changeAlternatives[i]).toFixed(2)); // 0.25 // 3 * 0.1 = 0.3

      cid[i][1] = Math.abs(Number(cid[i][1].toFixed(2)));

      let changeCurrency = cid[i][0]; // QUARTER

      if (value > cid[i][1]) {
        value = cid[i][1];
        // FIXER
      }
      cid[i][1] = cid[i][1] - value; //QUARTER

      if (cid[i][1] < 0) {
        changeAlternatives.pop();
        i = changeAlternatives.length;
        change = changeCopy;
        yourChange = [];
        continue ca;
      }

      yourChange.push([changeCurrency, value]); //SHOULD BE QUARTER : 0.5 AS UR CHANGE
      change -= value;
      change = Number(change.toFixed(2));
      // if (change === 0) {
      //   break;
      // }
    }

    return { Status: "OPEN", change: yourChange.reverse() };
  }
};

// => {status: "OPEN", change: [["QUARTER", 0.5]]}

// console.log(
//   cashRegister(3.26, 100, [
//     ["PENNY", 1.01],
//     ["NICKEL", 2.05],
//     ["DIME", 3.1],
//     ["QUARTER", 4.25],
//     ["ONE", 90],
//     ["FIVE", 55],
//     ["TEN", 20],
//     ["TWENTY", 60],
//     ["ONE HUNDRED", 100],
//   ])
// );

cashRegister(19.5, 18, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);
// => {status: "INCORRECT_PAYMENT", change: []}

console.log(
  cashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);

// => {status: "OPEN", change: [["QUARTER", 0.5]]}

console.log(
  cashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);
/*
{
  status: "OPEN",
  change: [
    ["PENNY", 0.04],
    // (no nickels since zero)
    ["DIME", 0.2],
    ["QUARTER", 0.5],
    ["ONE", 1],
    ["FIVE", 15],
    ["TEN", 20],
    ["TWENTY", 60]
    // (no hundred since zero)
  ]
}
*/
