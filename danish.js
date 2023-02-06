// console.log((3.0999999999999996).toFixed(2));
// console.log(3 * 0.1);

let testY = [
  ["TWENTY", 60],
  ["TEN", 20],
  ["FIVE", 15],
  ["ONE", 1],
  ["QUARTER", 0.5],
  ["DIME", 0.2],
  ["PENNY", 0.04],
];

const testX = JSON.parse(JSON.stringify(testY));
console.log(testX, "this is testX");
testY[0][1] = 40;
console.log(testY);

console.log(testY.reverse());

console.log("Compare");
console.log(testY, "this is testY");

console.log(testX, "this is testX -v2");
testY = testX;
console.log(testY);

//NEED TO MAKE A DEEPCLONE OF AN ARRAY USING JSON
