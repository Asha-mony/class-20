const numbers = [2, 3, 4, 5, 7]
// const newNumbers = [4, 6, 8, 10, 12]


function double(numberArray) {
    const newNumbers = [];
    for (const number of numberArray) {
        const doubled = number * 2
        newNumbers.push(doubled)

        // console.log(newNumbers);
    }
    return newNumbers;

}
const newArray = double(numbers)
// console.log('Stored at newArray', newArray);




// const add = (a, b) => a * 2
// #bracket needed for multimunbers
// map
const storedFormMap = numbers.map(num => num * 2)
// console.log('fromMap', storedFormMap);



const names = ['Sajal', 'Dipu', 'Rohul', 'Habiba']

names.map(name => {
    if (name === 'Habiba'){
        // console.log(name + ' '+ 'Khan Shheban');
    }
    else {
        // console.log(name + ' '+ 'Khan Shaheb');
    }
})



// more with map
const shop = [
    {mobile: 'Oppo', Price: '200600', model: 'f7'},
    {mobile: 'Samsung', Price: '200500', model: 'a75'},
    {mobile: 'Nokia', Price: '200800', model: '1110'},
    {mobile: 'Motoral', Price: '200700', model: 'r5'}
]

// shop.map(gadget => console.log(gadget.model))
const storedModels = shop.map(gadget => gadget.model)
const storedPrice = shop.map(gadget => gadget.Price)
const storedMobile = shop.map(gadget => gadget.mobile)

console.log(storedModels);
console.log(storedPrice);
console.log(storedMobile);