const numbers = [55, 25, 2, 52, 32, 3, 323, 3, 23, 233];
const biggers = numbers.filter(number => number > 25);
console.log(biggers);
const products = [
    { name: 'phone', price: 980, color: 'red' },
    { name: 'watch', price: 90, color: 'green' },
    { name: 'calcultor', price: 10, color: 'black' },
    { name: 'tv', price: 9800, color: 'pink' },
];
const blackProduct = products.filter(proudt => proudt.color == 'black');
console.log(blackProduct);
const expensiveProudct = products.filter(proudct => proudct.price > 100);
console.log(expensiveProudct);
const expendive = products.find(p => p.price > 50);
console.log(expendive);