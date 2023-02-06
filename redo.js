const cashRegister = (price, cash, cid) => {
  let change = Number((cash - price).toFixed(2));
  let changeCopy = change;
  const cashInDrawValue = Number(
    cid.reduce((acc, val) => acc + val[1], 0).toFixed(2)
  );

  if (cashInDrawValue === change) {
    return { status: "CLOSED", change: cid };
  }

  if (cash < price) {
    return { status: "INCORRECT_PAYMENT", change: [] };
  }

  if (cashInDrawValue < change) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  if (cashInDrawValue > change) {
    const fixedCurrencyValue = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
    let emArr = [];
    for (let i = 0; i < cid.length; i++) {
      if (cid[i][1] !== 0 && cid[i][1] / fixedCurrencyValue[i] > 1) {
        emArr.push(change / cid[i]);
        // console.log(emArr);
      }
      if (emArr.length === 0) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
      }
    }

    if (cashInDrawValue > change) {
      let changeAlternatives = [];

      //n if the change does no

      for (let i = 0; i < cid.length; i++) {
        if (change / fixedCurrencyValue[i] >= 1) {
          changeAlternatives.push(fixedCurrencyValue[i]);
        }
      }
      console.log(changeAlternatives);
      let yourChange = [];

      ca: for (let i = changeAlternatives.length - 1; i >= 0; i--) {
        let Quantity = Number(Math.floor(change / changeAlternatives[i]));
        console.log(cid[i], "currencyName");
        console.log(Quantity, "Quantity");
        if (Quantity < 1 || cid[i][1] === 0) {
          console.log("skipped", cid[i]);
          continue ca;
        }

        let value = Number((Quantity * changeAlternatives[i]).toFixed(2));
        console.log(value, "Value");

        cid[i][1] = Math.abs(Number(cid[i][1].toFixed(2)));

        let changeCurrency = cid[i][0];
        cid[i][1] = cid[i][1] - value;

        if (cid[i][1] < 0) {
          changeAlternatives.pop();
          i = changeAlternatives.length;
          change = changeCopy;
          yourChange = [];
          continue ca;
        }

        yourChange.push(changeCurrency, cid[i][1]);
        change -= value;
        change = Number(change.toFixed(2));
      }

      console.log(yourChange);
      return { status: "OPEN", change: yourChange };
    }
  }
  return "RUFUS";
};

// console.log(
//   cashRegister(19.5, 18, [
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
// => {status: "INCORRECT_PAYMENT", change: []}

// console.log(
//   cashRegister(19.5, 20, [
//     ["PENNY", 0.01],
//     ["NICKEL", 0],
//     ["DIME", 0],
//     ["QUARTER", 0],
//     ["ONE", 0],
//     ["FIVE", 0],
//     ["TEN", 0],
//     ["TWENTY", 0],
//     ["ONE HUNDRED", 0],
//   ])
// );
// => {status: "INSUFFICIENT_FUNDS", change: []}

// console.log(
//   cashRegister(19.5, 20, [
//     //0.50
// ["PENNY", 0], //
// ["NICKEL", 0],
// ["DIME", 0],
// ["QUARTER", 0],
// ["ONE", 1],
// ["FIVE", 0],
// ["TEN", 0],
// ["TWENTY", 20],
// ["ONE HUNDRED", 0],
//   ])
// );
// => {status: "INSUFFICIENT_FUNDS", change: []}

//  Find the quantity of how many they havge

// const fixedCurrencyValue = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
// const change = 0.5;

// console.log(change);
// let currencyArr = [];

// for (let i = 0; i < fixedCurrencyValue.length; i++) {
//   if (change / fixedCurrencyValue[i] >= 1) {
//     currencyArr.push(fixedCurrencyValue[i]);
//   }
// }

// if (currencyArr.length === 0) {
//   return { status: "INSUFFICIENT_FUNDS", change: [] };
// }
// console.log(currencyArr);

// console.log(
//   cashRegister(19.5, 20, [
//     ["PENNY", 0],
//     ["NICKEL", 0],
//     ["DIME", 0],
//     ["QUARTER", 0],
//     ["ONE", 1],
//     ["FIVE", 0],
//     ["TEN", 0],
//     ["TWENTY", 20],
//     ["ONE HUNDRED", 0],
//   ])
// );
// => {status: "INSUFFICIENT_FUNDS", change: []}

// console.log(
//   cashRegister(19.5, 20, [
//     //0.50
//     ["PENNY", 0], //
//     ["NICKEL", 0],
//     ["DIME", 0],
//     ["QUARTER", 0],
//     ["ONE", 1],
//     ["FIVE", 0],
//     ["TEN", 0],
//     ["TWENTY", 20],
//     ["ONE HUNDRED", 0],
//   ])
// );
const cid = [
  ["PENNY", 0.5],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
];
// const fixedCurrencyValue = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
// const change = 0.5;
// let emArr = [];
// const change = 0.5;

// console.log(change);
// let currencyArr = [];

// for (let i = 0; i < fixedCurrencyValue.length; i++) {
//   if (change / fixedCurrencyValue[i] >= 1) {
//     currencyArr.push(fixedCurrencyValue[i]);
//   }
// }

// if (currencyArr.length === 0) {
//   return { status: "INSUFFICIENT_FUNDS", change: [] };
// }

// for (let i = 0; i < cid.length; i++) {
//   if (cid[i][1] !== 0 && cid[i][1] / fixedCurrencyValue[i] > 1) {
//     emArr.push(change / cid[i]);
//     console.log(emArr);
//   }
// }

// if (emArr.length === 0) {
//   return { status: "INSUFFICIENT_FUNDS", change: [] };
// }
// console.log(emArr);

// console.log(
//   cashRegister(19.5, 20, [
//     ["PENNY", 0.04],
//     ["NICKEL", 0],
//     ["DIME", 0.6],
//     ["QUARTER", 4.25],
//     ["ONE", 90],
//     ["FIVE", 55],
//     ["TEN", 20],
//     ["TWENTY", 60],
//     ["ONE HUNDRED", 100],
//   ])
// );
/* 
  {
    status: "CLOSED",
    change: [
      ["PENNY", 0.5],
      ["NICKEL", 0],
      ["DIME", 0],
      ["QUARTER", 0],
      ["ONE", 0],
      ["FIVE", 0],
      ["TEN", 0],
      ["TWENTY", 0],
      ["ONE HUNDRED", 0]
    ]
  }
  */
// const change = 0.5;
// const cashInDrawValue = 0.5;
// console.log(cashInDrawValue, change);
// let closed = false;
// if (cashInDrawValue === change) {
//   closed = true;

//   return { status: "CLOSED", change: cid };
// }

// if (closed) {
//   cid.forEach((item) => (item[1] = 0));
//   console.log(cid);
// }

// let changeAlternatives = [];

// if (change < cashInDrawValue) {
//   const fixedCurrencyValue = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
//   for (let i = cid.length; i <= 0; i--) {
//     if (change / fixedCurrencyValue[i] > 1) {
//       changeAlternatives.push(fixedCurrencyValue[i]);
//     }
//   }
// }
// console.log(changeAlternatives);
/*
THE CHANGE IS 0.31
So we need to get one quarter, and 6 penny 


so we have the cid values and we have the change but we also have the currency array
for we do a for loop where we do the change / currencyfixedValue[i] 
if the value of that equation is greater than >=1
we push it into an array which means that the change can be given in those currency


*/

/////////////////////////////
console.log(
  cashRegister(0.69, 1, [
    ["PENNY", 0.04],
    ["NICKEL", 0.0],
    ["DIME", 0.6],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);

/*
0.04 / 0.01 = 4
0 / 0.05 = 0
0.6 / 0.10 = 6
4.25 / 0.25 = 17
90 / 1 = 91
55 / 5 = 11
60 / 20 = 3
100 / 100 = 1


THE CHANGE IS 0.31
So we need to get one quarter, and 6 penny 


so we have the cid values and we have the change but we also have the currency array
for we do a for loop where we do the change / currencyfixedValue[i] 
if the value of that equation is greater than >=1
we push it into an array which means that the change can be given in those currency

let yourChange = []

do a for loop
Quantity = 0.31 / 0.25 = 1.24 / since the change divided by the quarter was greater than 1 we can push the change into an array 
we do Math.floor on this value and then we do fixedcurrency[i] * Quantity
let currency = cid[i][0]
we then push 
[Quarter: 0.25]
yourChange.push([currency, quantity])

cid[i][1] - fixedCurrencyValue[i]
0.31 - 0.25 = 6 

*/

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
