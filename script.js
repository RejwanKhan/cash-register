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

let price = 0;
const checkout = document.querySelector(".checkout")

const kitkat = document.getElementById("Kitkat")
const oreo = document.querySelector("#Oreo")
const kinderBueno = document.querySelector("#Kinder Bueno")
const dairyMilk = document.querySelector("#Dairy Milk")
const twix  = document.querySelector("#Twix")
const malteasers = document.querySelector("Maltesers")
const flake = document.querySelector("#Flake")  
const bounty = document.querySelector("#Bounty")
const mars = document.querySelector("#Mars")
const total = document.querySelector(".total")



kitKat.addEventListener('click', () => {
  let cashIng = kitKat.outerText.substring(1);
  price += Number (cashIng);
  console.log(cashIng);
  total.textContent =`Total: $` + Number(price).toFixed(2);
})


// oreo.addEventListener('click', () => {
//   let cashIng = oreo.outerText.substring(1);
//   price += Number (cashIng);
//   console.log(cashIng);
//   total.textContent =`Total: $` + Number(price).toFixed(2);
// })

// kinderBueno.addEventListener('click', () => {
//   let cashIng = kinderBueno.outerText.substring(1);
//   price += Number (cashIng);
//   console.log(cashIng);
//   total.textContent =`Total: $` + Number(price).toFixed(2);
// })

// dairyMilk.addEventListener('click', () => {
//   let cashIng = dairyMilk.outerText.substring(1);
//   price += Number (cashIng);
//   console.log(cashIng);
//   total.textContent =`Total: $` + Number(price).toFixed(2);
// })

// twix.addEventListener('click', () => {
//   let cashIng = twix.outerText.substring(1);
//   price += Number (cashIng);
//   console.log(cashIng);
//   total.textContent =`Total: $` + Number(price).toFixed(2);
// })

// flake.addEventListener('click', () => {
//   let cashIng = flake.outerText.substring(1);
//   price += Number (cashIng);
//   console.log(cashIng);
//   total.textContent =`Total: $` + Number(price).toFixed(2);
// })

// malteasers.addEventListener('click', () => {
//   let cashIng = malteasers.outerText.substring(1);
//   price += Number (cashIng);
//   console.log(cashIng);
//   total.textContent =`Total: $` + Number(price).toFixed(2);
// })

// bounty.addEventListener('click', () => {
//   let cashIng = bounty.outerText.substring(1);
//   price += Number (cashIng);
//   console.log(cashIng);
//   total.textContent =`Total: $` + Number(price).toFixed(2);
// })

// mars.addEventListener('click', () => {
//   let cashIng = mars.outerText.substring(1);
//   price += Number (cashIng);
//   console.log(cashIng);
//   total.textContent =`Total: $` + Number(price).toFixed(2);
// })







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
  total.textContent ="Total: $" + cash
  // cashRegister(price, cash,[
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
})
