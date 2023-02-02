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

const cashRegister = (price, cost, cid) => {
  const object = { status: "", change: [] };
  const change = price - cost;

  if (change < 0) {
    object.status = "INCORRECT_PAYMENT";
    return `status : ${object.status}, change " ${object.change}`;
  }

  const cashInDrawValue = cid.reduce((acc, val) => acc + val[1], 0);
};

console.log(test1.reduce((acc, val) => acc + val[1], 0).toFixed(2));
