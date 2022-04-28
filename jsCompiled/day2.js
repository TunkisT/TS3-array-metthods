const people = [
    {
        name: 'Jonas',
        surname: 'Jonaitis',
        sex: 'male',
        age: 26,
        income: 1200,
        married: false,
        hasCar: false,
    },
    {
        name: 'Severija',
        surname: 'Piktutytė',
        sex: 'female',
        age: 26,
        income: 1300,
        married: false,
        hasCar: true,
    },
    {
        name: 'Valdas',
        surname: 'Vilktorinas',
        sex: 'male',
        age: 16,
        income: 0,
        married: false,
        hasCar: false,
    },
    {
        name: 'Virginijus',
        surname: 'Uostauskas',
        sex: 'male',
        age: 32,
        income: 2400,
        married: true,
        hasCar: true,
    },
    {
        name: 'Samanta',
        surname: 'Uostauskienė',
        sex: 'female',
        age: 28,
        income: 1200,
        married: true,
        hasCar: true,
    },
    {
        name: 'Janina',
        surname: 'Stalautinskienė',
        sex: 'female',
        age: 72,
        income: 364,
        married: false,
        hasCar: false,
    },
];
import { items } from '../data/day1.js';
function fn1(arg) {
    const result = arg.filter((obj) => obj.sex === 'male');
    console.log(result);
}
function fn2(arg) {
    const result = arg.filter((obj) => obj.age < 35 && obj.sex === 'female');
    return result;
}
function fn3(arg) {
    const result = arg.filter((obj) => obj.hasCar);
    return result;
}
function fn4(arg) {
    const result = arg.filter((obj) => obj.married === true);
    return result;
}
function fn5(arg) {
    const drives = arg.filter((obj) => obj.hasCar === true);
    const result = drives.map((obj) => obj.sex);
    console.log(result);
}
function fn6(arg) {
    const drives = arg.filter((obj) => obj.hasCar);
    const resultArr = drives.map((obj) => obj.sex);
    let counts = {};
    resultArr.forEach(function (x) {
        counts[x] = (counts[x] || 0) + 1;
    });
    return counts;
}
function fn7(arg) {
    const result = arg.map((obj) => obj.age);
    return result;
}
function findByName(arr, name) {
    const result = arr.filter((obj) => obj.name === name);
    result.length === 0 ? console.log('{err: not found}') : console.log(result);
}
function fn9(arg) {
    const surArr = arg.map((obj) => obj.surname);
    const result = surArr.map((item) => `${item} length: ${item.length}`);
    return result;
}
function fn10(arg) {
    const newArr = arg.map((obj) => (Object.assign(Object.assign({}, obj), { isArchived: false })));
    return newArr;
}
const newPeopleArray = fn10(people);
function makeDelete(arr, index) {
    arr[index].isArchived = true;
}
makeDelete(newPeopleArray, 0);
const cards = document.getElementById('cards') || null;
const list = document.createElement('ol');
function createElements(arg) {
    if (list)
        list.innerHTML = '';
    cards.append(list);
    arg.forEach((obj) => {
        list.innerHTML += `
    <li id='item'>${obj.title.slice(0, 15)} ${obj.price}$ 
    <button data-id=${obj.id} class='buy'>BUY</button> </li>
      `;
    });
}
createElements(items.slice(0, 5));
let cart = [];
list.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.classList.contains('buy')) {
        const itemId = event.target.dataset.id - 1;
        const { title, price, rating } = items[itemId];
        const newObj = {
            title,
            price,
            qty: rating.count,
        };
        cart.push(newObj);
        showCart(cart);
    }
});
const result = document.getElementById('result') || null;
function showCart(data) {
    result.innerHTML = '';
    data.forEach((obj) => {
        result.innerHTML += `
    <div class='card'>
    <h4>${obj.title}</h4>
    <h4>${obj.price}$</h4>
    <h4>${obj.qty} items</h4>
    </div>
    `;
    });
}
const btnSort = document.getElementById('sort');
btnSort === null || btnSort === void 0 ? void 0 : btnSort.addEventListener('click', (e) => {
    console.log('sort');
    const sortedItems = items.sort((a, b) => a.price - b.price);
    createElements(sortedItems);
});
const minus = document.getElementById('minus');
const counter = document.getElementById('counter');
minus === null || minus === void 0 ? void 0 : minus.addEventListener('click', (e) => {
    if ((counter === null || counter === void 0 ? void 0 : counter.innerHTML) > '0') {
        counter.innerHTML -= 1;
    }
});
