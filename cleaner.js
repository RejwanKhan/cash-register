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
    // console.log(cid);
    object.change = noChange;
    return object;
  }

  if (change > 0 && change < cashInDrawValue) {
    object.status = "OPEN";
    // const cidValues = cid.map((item) => item[1]);
    // return cidValues;
    return object.status;
  }
};

// console.log(test1.reduce((acc, val) => acc + val[1], 0).toFixed(2));

// console.log(cashRegister(10, 11, test1));

//testcases

// const test2 = (3, 5, test1); // Fargo
// const test3 = (5, 1, test1); // Incorrect Payement
// const test4 = (1, 336.41, test1); // Closed
// const test5 = (3, 5, test1); //
// const test6 = (5, 1, test1); // Incorrect Payement

// console.log(test1);
// console.log("fargo");
// console.log(test1);
// console.log(test5);

console.log(cashRegister(3, 5, test1));
console.log(test1, "a");
console.log(cashRegister(5, 1, test1));
console.log(test1, "b");
console.log(cashRegister(1, 336.41, test1));
console.log(test1, "c");
console.log(cashRegister(3, 5, test1));
console.log(test1, "d");
console.log(cashRegister(5, 1, test1));
