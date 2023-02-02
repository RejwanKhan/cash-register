/*
The cashRegister function should always return an object with a status key and a change key.
Return {status: "INCORRECT_PAYMENT", change: []} if cash is less than the price.
Return {status: "INSUFFICIENT_FUNDS", change: []} if cid (cash-in-drawer) is less than the change due or if you cannot return the exact change.
Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due. 
Include each currency unit in the drawer, even if its value is zero. 
(i.e. DO display ["NICKEL", 0])
Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, as the value of the change key.
 Only include the value of a currency unit if its value is not zero. 
(i.e. do NOT display ["NICKEL", 0])
*/

const test1 = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
];
// Example function call
// cashRegister(19.5, 20, [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100],
// ]);

//Rejwan khan

const cashRegister = (price, cash, cid) => {
  const object = { status: "", change: [] };
  // const change = price - cash;
  const change = cash - price;
  // console.log(change, "b", typeof change);

  if (change < 0) {
    object.status = "INCORRECT_PAYMENT";
    return `status : ${object.status}, change " ${object.change}`;
  }

  const cashInDrawValue = Number(
    cid.reduce((acc, val) => acc + val[1], 0).toFixed(2)
  );
  // console.log(cashInDrawValue, "a", typeof cashInDrawValue);
  if (change > cashInDrawValue) {
    object.status = "INSUFFICIENT_FUNDS";
    return `status : ${object.status}, change ${object.change}`;
  }

  if (change === cashInDrawValue) {
    object.status = "CLOSED";
    const noChange = cid.map((item) => (item[1] = 0));
    object.change = noChange;
    return `status: ${object.status}, change: ${object.change}`;
  }

  if (change > 0 && change < cashInDrawValue) {
    return "Fargo";
  }
};

console.log(test1.reduce((acc, val) => acc + val[1], 0).toFixed(2));

// console.log(cashRegister(10, 11, test1));

//testcases

// const test2 = cashRegister(3, 5, test1); // Fargo
// const test3 = cashRegister(5, 1, test1); // Incorrect Payement
const test4 = cashRegister(1, 336.41, test1); // Closed

// console.log(test2);
// console.log(test3);
console.log(test4);
