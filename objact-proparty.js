const mehedi = {
    name: 'mehedi hasan', id: 58, father: 'pir mohammed', ocupation: 'student'
}
// const name = mehedi.name;
// // console.log(name);
// const { name, id, ocupation } = mehedi;
// console.log(name, id, ocupation);
const company = {
    name: 'gp', work: { type: 'programmer', framwork: 'talwind', ceo: { manager: 'hasan', id: 90 } }
}
const { name, work } = company
console.log(name, work);
const { type, framwork } = company.work
console.log(type, framwork);