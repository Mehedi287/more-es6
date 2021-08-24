
const numbers = [2, 4, 5, 10, 5, 4];
const doubleOldArry = [];
for (const number of numbers) {
    const result = double(number);
    doubleOldArry.push(result)
}
// console.log(doubleOldArry);
function double(number) {
    const result = number * 2;
    return result;
}
// console.log(doubleOldArry);
// all avobe in one line 
const doubleNew = numbers.map(double);
// console.log(doubleNew);
const scqure = numbers.map(a => a * a);
console.log(scqure);
