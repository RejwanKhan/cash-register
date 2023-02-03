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

// console.log(test1.reduce((acc, val) => acc + val[1], 0).toFixed(2));

// console.log(test1.reduce((acc, val) => acc + val[1], 0).toFixed(2));

// console.log(cashRegister(10, 11, test1));

//testcases

const test2 = (3, 5, test1); // Fargo
const test3 = (5, 1, test1); // Incorrect Payement
const test4 = (1, 336.41, test1); // Closed
const test5 = (3, 5, test1); //
const test6 = (5, 1, test1); // Incorrect Payement

// console.log(cashRegister(test2));

// console.log(cashRegister(test3));
// console.log(cashRegister(test4));

// console.log(cashRegister(3, 5, test1));
// console.log(test1);
// console.log(test1, "a");
// console.log(cashRegister(5, 1, test1));
// console.log(test1, "b");

console.log(cashRegister(1, 336.41, test1));
console.log(test1, "c");
// console.log(cashRegister(3, 5, test1));
// console.log(test1, "d");
// console.log(cashRegister(5, 1, test1));
console.log(cashRegister(3, 5, test1));

// console.log(test1);
// console.log(cashRegister(1, 5.06, test1));
// console.log(test1);

// console.log(test1);

/*
if you want to filter the currentChange to not display currency with 0
currentChange.filter((item =>) item[1] ! == 0)



*/
