// filter- return an arrry with the values we want
const numbers = [2, 4, 10, 12, 50, 100, 150]
const lessThen10 = numbers.filter(num => num < 10)
const greaterThen10 = numbers.filter(num => num >= 10)

//(==) never ckeck value or string
// const equalCheck = numbers.filter(num => num == '10')

// (===)check is it value or string
// const equalCheck = numbers.filter(num => num === '10')
// console.log(lessThen10);
// console.log(greaterThen10);
// console.log(equalCheck);j


const names = ['Sajal', 'Dipu', 'Rohul', 'Habiba']
// const filteredName = names.filter(name => name == 'Dipu')
const filteredName = names.filter(name => name !== 'Dipu')
// console.log(filteredName);


const shop = [
    {mobile: 'Oppo', Price: '200', model: 'f7'},
    {mobile: 'Samsung', Price: '1000', model: 'a75'},
    {mobile: 'Nokia', Price: '500', model: '1110'},
    {mobile: 'Motoral', Price: '3000', model: 'r5'}
]

const greaterThen500 = shop.filter(gadget => gadget.Price > 500)
const oppo = shop.filter(gadget => gadget.mobile == 'Oppo')
// console.log(greaterThen500);
console.log(oppo);