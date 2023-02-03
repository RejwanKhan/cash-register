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

function cashRegister(price, cash, cid) {
  const currency = {
    "ONE HUNDRED": {value: 100.0},
    "TWENTY": {value: 20.0}, 
    "TEN": {value: 10.0}, 
    "FIVE": {value: 5.0}, 
    "ONE": {value: 1.0}, 
    "QUARTER": {value: 0.25}, 
    "DIME": {value: 0.1}, 
    "NICKEL": {value: 0.05}, 
    "PENNY": {value: 0.01}
  };
  let changeDue = cash - price;
  let cidTotal = cid.reduce((sum, current) => sum + current[1], 0.0);
  if (cash < price){
        change = [0];
          return { status: "INCORRECT_PAYMENT", change: [] };
  }
  if (changeDue > cidTotal) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (changeDue === cidTotal) {
    return { status: "CLOSED", change: cid };
  } else {
    let returnList = [];
    for (d of cid.reverse()) {
      returnList.unshift([d[0],0]);
      denomination = d[0];
      tillBalance = d[1];
      while (
          tillBalance > 0 && 
          changeDue >= currency[denomination].value) {
              tillBalance -= currency[denomination].value;
              tillBalance = Number.parseFloat(tillBalance).toFixed(2);
              changeDue -= currency[denomination].value;
              changeDue = Number.parseFloat(changeDue).toFixed(2);
              returnList[0][1] = returnList[0][1] + currency[denomination].value;
          }
          if (returnList[0][1] === 0) returnList.shift();
      }
    if (changeDue > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
    return { status: "OPEN", change: returnList };
  }
}


const checkout = document.querySelector(".checkout")

const total = document.querySelector(".total")
let price = 0;
checkout.addEventListener('click', () => {
  let cash = Number(prompt("Please pay the amount dued."));

  cashRegister(price, cash,[
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
})
