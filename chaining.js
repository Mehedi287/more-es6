const company = {
    name: 'hasan', id: 89,
    ceo: {
        ceoName: 'ajij', exprience: '3 years',
        Worker: {
            details: 'lalu', age: 67
        }
    }
}
const { name, age } = company?.ceo?.Worker;
console.log(name, age);
const [fast, scond] = [45, 'hasan']
// console.log(fast, scond);
const result = id + fast;
// console.log(result);
