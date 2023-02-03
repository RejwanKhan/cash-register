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

const cashRegister = (price, cash, cid) => {
  //STEP 1
  const object = { status: "", change: [] };

  const change = cash - price;

  if (change < 0) {
    object.status = "INCORRECT_PAYMENT";
    return object;
  }

  //STEP 2

  const cashInDrawValue = Number(
    cid.reduce((acc, val) => acc + val[1], 0).toFixed(2)
  );

  if (change > cashInDrawValue) {
    object.status = "INSUFFICIENT_FUNDS";

    return object;
  }

  //STEP 3
  if (change === cashInDrawValue) {
    object.status = "CLOSED";
    const noChange = [];
    const copy = [...cid];
    const cidValues = copy.map((item) => {
      item[1] = 0;
      noChange.push(item);
    });

    object.change = noChange;
    return object;
  }

  if (change > 0 && change < cashInDrawValue) {
    object.status = "OPEN";

    let i = 0;
    let tempChange = change;
    let customerChange = [];

    while (tempChange !== 0) {
      let currentChange = cid[i][1];

      if (tempChange > currentChange) {
        tempChange -= currentChange;
        customerChange.push([...cid[i]]);
        cid[i][1] = 0;
      } else if (currentChange > tempChange) {
        cid[i][1] = tempChange;
        customerChange.push([...cid[i]]);

        currentChange -= tempChange;
        currentChange = Number(currentChange.toFixed(2));

        cid[i][1] = currentChange;

        tempChange = 0;
      }

      i++;
      if (i === cid.length) {
        break;
      }
    }
    // const filt = customerChange.filter((item, i) => item[1]); // To display change that do not = to zero (Change object.change to filt)
    // object.change = customerChange;
    const filt = customerChange.filter((item, i) => item[1]);
    object.change = filt;
    return object;
  }
};

// console.log(cashRegister(19.5, 18, test1));
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

// => {status: "INSUFFICIENT_FUNDS", change: []})

// console.log(
//   cashRegister(19.5, 20, [
//     ["PENNY", 0.5],
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

// console.log(
//   cashRegister(19.5, 20, [
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

// => {status: "OPEN", change: [["QUARTER", 0.5]]} //4A

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
