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
//   ["ONE HUNDRED", 100],``
// ]);


const cashRegister = (price, cash, cid) => {
  let change = Number((cash - price).toFixed(2));
  let changeCopy = change;
  const cashInDrawValue = Number(
    cid.reduce((acc, val) => acc + val[1], 0).toFixed(2)
  );
  let cidCopy = JSON.parse(JSON.stringify(cid));
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
      }
      if (emArr.length === 0) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
      }
    }
  }
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
    }
    if (change !== 0) {
      cid = cidCopy;
      change = changeCopy;
      let changeAlternatives = [];
      for (let i = 0; i < cid.length; i++) {
        if (change / fixedCurrencyValue[i] >= 1) {
          changeAlternatives.push(fixedCurrencyValue[i]);
        }
      }
      let yourChange = [];
      ca: for (let i = changeAlternatives.length - 1; i >= 0; i--) {
        let Quantity = Number(Math.floor(change / changeAlternatives[i]));
        if (Quantity < 1 || cid[i][1] === 0) {
          continue ca;
        }
        let value = Number((Quantity * changeAlternatives[i]).toFixed(2));
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
        yourChange.push([changeCurrency, cid[i][1]]);
        change -= value;
        change = Number(change.toFixed(2));
      }
      return { status: "OPEN", change: yourChange.reverse() };
    }
    return { status: "OPEN", change: yourChange.reverse() };
  }
};

// function cashRegister(price, cash, cid) {
//   const currency = {
//     "ONE HUNDRED": {value: 100.0},
//     "TWENTY": {value: 20.0}, 
//     "TEN": {value: 10.0}, 
//     "FIVE": {value: 5.0}, 
//     "ONE": {value: 1.0}, 
//     "QUARTER": {value: 0.25}, 
//     "DIME": {value: 0.1}, 
//     "NICKEL": {value: 0.05}, 
//     "PENNY": {value: 0.01}
//   };
//   let changeDue = cash - price;
//   let cidTotal = cid.reduce((sum, current) => sum + current[1], 0.0);
//   if (cash < price){
//         change = [0];
//           return { status: "INCORRECT_PAYMENT", change: [] };
//   }
//   if (changeDue > cidTotal) {
//     return { status: "INSUFFICIENT_FUNDS", change: [] };
//   } else if (changeDue === cidTotal) {
//     return { status: "CLOSED", change: cid };
//   } else {
//     let returnList = [];
//     for (d of cid.reverse()) {
//       returnList.unshift([d[0],0]);
//       denomination = d[0];
//       tillBalance = d[1];
//       while (
//           tillBalance > 0 && 
//           changeDue >= currency[denomination].value) {
//               tillBalance -= currency[denomination].value;
//               tillBalance = Number.parseFloat(tillBalance).toFixed(2);
//               changeDue -= currency[denomination].value;
//               changeDue = Number.parseFloat(changeDue).toFixed(2);
//               returnList[0][1] = returnList[0][1] + currency[denomination].value;
//           }
//           if (returnList[0][1] === 0) returnList.shift();
//       }
//     if (changeDue > 0) {
//       return { status: "INSUFFICIENT_FUNDS", change: [] };
//     }
//     return { status: "OPEN", change: returnList };
//   }
// }

let price = 0;
const checkout = document.querySelector(".checkout")

const kitkat = document.querySelector("#KitKat")
const oreo = document.querySelector("#Oreo")
const kinderBueno = document.querySelector("#KinderBueno")
const dairyMilk = document.querySelector("#DairyMilk")
const twix  = document.querySelector("#Twix")
const malteasers = document.querySelector("#Maltesers")
const flake = document.querySelector("#Flake")  
const bounty = document.querySelector("#Bounty")
const mars = document.querySelector("#Mars")
const total = document.querySelector(".total")






oreo.addEventListener('click', () => {
let cashIng = oreo.outerText.substring(1);
price += Number (cashIng);
console.log(cashIng);
total.textContent =`Total: $` + Number(price).toFixed(2);
})

kitkat.addEventListener('click', () => {
  let cashIng = kitkat.outerText.substring(1);
  price += Number (cashIng);
  console.log(cashIng);
  total.textContent =`Total: $` + Number(price).toFixed(2);
  })

kinderBueno.addEventListener('click', () => {
  let cashIng = kinderBueno.outerText.substring(1);
  price += Number (cashIng);
  console.log(cashIng);
  total.textContent =`Total: $` + Number(price).toFixed(2);
})

dairyMilk.addEventListener('click', () => {
  let cashIng = dairyMilk.outerText.substring(1);
  price += Number (cashIng);
  console.log(cashIng);
  total.textContent =`Total: $` + Number(price).toFixed(2);
})

twix.addEventListener('click', () => {
  let cashIng = twix.outerText.substring(1);
  price += Number (cashIng);
  console.log(cashIng);
  total.textContent =`Total: $` + Number(price).toFixed(2);
})

flake.addEventListener('click', () => {
  let cashIng = flake.outerText.substring(1);
  price += Number (cashIng);
  console.log(cashIng);
  total.textContent =`Total: $` + Number(price).toFixed(2);
})

malteasers.addEventListener('click', () => {
  let cashIng = malteasers.outerText.substring(1);
  price += Number (cashIng);
  console.log(cashIng);
  total.textContent =`Total: $` + Number(price).toFixed(2);
})

bounty.addEventListener('click', () => {
  let cashIng = bounty.outerText.substring(1);
  price += Number (cashIng);
  console.log(cashIng);
  total.textContent =`Total: $` + Number(price).toFixed(2);
})

mars.addEventListener('click', () => {
  let cashIng = mars.outerText.substring(1);
  price += Number (cashIng);
  console.log(cashIng);
  total.textContent =`Total: $` + Number(price).toFixed(2);
})







console.log(document.getElementById("KitKat").outerText)




const totalPrice = []




// kitkat.addEventListener('click', () => {
//   //price = price + kitkat.value;
//   console.log(kitkat.children);
// })
//oreo.addEventListener('click', () => {
//  console.log(oreo.)
//}





// kinderBueno.addEventListener("click", () => {
//   console.log(kinderBueno.children)
// })




checkout.addEventListener('click', () => {
  let cash = Number(prompt("Please pay the amount dued ($X.YZ)"));
  //total.textContent ="Total: $" + cash
  console.log("Price: $", price);
  console.log("Cash: $", cash);
  

     let results = cashRegister(price, cash, [
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
    console.log(results);
    let test = results.change;
    let changeRes = "";
    //console.log(test);
    for (i of test) {
      //console.log(i);
      changeRes = changeRes + `${i} `;
    }
    const totalCost = document.querySelector(".totalCost");
    totalCost.textContent = total.textContent;

    const cashPaid = document.querySelector(".cashPaid");
    cashPaid.textContent = "Cash Paid: $" + cash;

    const status = document.querySelector(".status");
    status.textContent = "Status: " + results.status;

    const outcome = document.querySelector(".outcome");
    outcome.textContent = "Change: " + changeRes;
    
  // cashRegister(price, cash,[
  //   ["PENNY", 1.01],
  //   ["NICKEL", 2.05],
  //   ["DIME", 3.1],
  //   ["QUARTER", 4.25],
  //   ["ONE", 90],co
  //   ["FIVE", 55],
  //   ["TEN", 20],
  //   ["TWENTY", 60],
  //   ["ONE HUNDRED", 100],
  // ]);
})




// const smake = document.querySelector('#SMAKE')



// smake.addEventListener('click', () => {
//   let cashIng = smake.outerText.substring(1);
//   price += Number (cashIng);
//   console.log(cashIng);
//   total.textContent =`Total: $` + Number(price).toFixed(2);
// })