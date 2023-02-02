// Example function call
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
]);

//Rejwan khan


const cashRegister = (price, cash, cid) => {
  let change = [0];

  const currencyValue = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    ONE_HUNDRED: 100
  };

  //Getting the change value by cash - price
  //change = cash - price;

  //Return {status: "INCORRECT_PAYMENT", change: []} if cash is less than the price.
  if(cash < price) {
    return {status: "INCORRECT_PAYMENT", change: []};
  }

  if (cid < change){
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }

  if (cid === change){
    return {status: "CLOSED", change: cid};
  } 
  return { status: "OPEN", change: change };

  
}
 
let change = [];
cid = cid.reverse();

  for (let i = 0; i < cid.length; i++) {
    let currencyUnit = cid[i][0];
    let value = currencyValues[currencyUnit];
    let amount = cid[i][1];
    let unitCount = 0;


    while (change >= value && amount > 0) {
      changeDue -= value;
      amount -= value;
      unitCount++;
    }

    change = Math.round(changeDue * 100) / 100;


    if (unitCount > 0) {
      change.push([currencyUnit, unitCount * value]);
    }
  }
