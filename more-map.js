const frind = ['hasan', 'ajujul ', 'hoqk'];
const frindLengrth = frind.map(f => f.length);
// console.log(frindLengrth);
const products = [
    { name: 'phone', price: 980, color: 'red' },
    { name: 'watch', price: 90, color: 'green' },
    { name: 'calcultor', price: 10, color: 'black' },
    { name: 'tv', price: 9800, color: 'pink' },
];
// const productsPrice = products.map(price => price.price);
const productsPrice = products.map(price => price.name);
console.log(productsPrice);