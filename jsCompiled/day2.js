"use strict";
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
function fn1(arg) {
    const result = arg.filter((obj) => obj.sex === 'male');
    console.log(result);
}
function fn2(arg) {
    const result = arg.filter((obj) => obj.age < 35 && obj.sex === 'female');
    return result;
}
function fn3(arg) {
    const result = arg.filter((obj) => obj.hasCar === true);
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
    const drives = arg.filter((obj) => obj.hasCar === true);
    const resultArr = drives.map((obj) => obj.sex);
    let counts = {};
    resultArr.forEach(function (x) {
        counts[x] = (counts[x] || 0) + 1;
    });
    console.log(counts);
}
function fn7(arg) {
    const result = arg.map((obj) => obj.age);
    return result;
}
function findByName(arr, name) {
    const result = arr.filter((obj) => obj.name === name);
    result.length === 0 ? console.log('{err: not found}') : console.log(result);
}
