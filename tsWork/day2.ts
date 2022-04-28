interface peopleObj {
  name: string;
  surname: string;
  sex: string;
  age: number;
  income: number;
  married: boolean;
  hasCar: boolean;
}

const people: peopleObj[] = [
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

// 1. parasyti Fn kuri atspausdina visus vyrus

function fn1(arg: peopleObj[]): void {
  const result = arg.filter((obj: peopleObj): boolean => obj.sex === 'male');
  console.log(result);
}
// fn1(people);

// 2. parasyti Fn kuri grazina masyve moteris jaunesnies nei 35 metai

function fn2(arg: peopleObj[]): peopleObj[] {
  const result: peopleObj[] = arg.filter(
    (obj: peopleObj) => obj.age < 35 && obj.sex === 'female'
  );
  return result;
}
// console.log(fn2(people));

// 3. parasyti Fn kuri grazina masyve visus žmones kurie turi mašinas

function fn3(arg: peopleObj[]): peopleObj[] {
  const result: peopleObj[] = arg.filter((obj: peopleObj) => obj.hasCar);
  return result;
}
// console.log(fn3(people));

// 4. atspausdinti visus susituokusius žmones

function fn4(arg: peopleObj[]): peopleObj[] {
  const result: peopleObj[] = arg.filter(
    (obj: peopleObj) => obj.married === true
  );
  return result;
}
// console.log(fn4(people));

// 5. atspausdinti visų vairuojančių žmonių lytis

function fn5(arg: peopleObj[]): void {
  const drives: peopleObj[] = arg.filter(
    (obj: peopleObj) => obj.hasCar === true
  );
  const result: string[] = drives.map((obj: peopleObj) => obj.sex);
  console.log(result);
}
// fn5(people);
//
// 6. parasyti fn kuri suskaiciuoja ir grazina kiek yra vairuojanciu vyru ir moteru pvz {man: 4, woman: 5}

interface DriverObj {
  man: number;
  woman: number;
}

function fn6(arg: peopleObj[]): DriverObj {
  const drives: peopleObj[] = arg.filter(
    (obj: peopleObj): boolean => obj.hasCar
  );
  const resultArr: string[] = drives.map((obj: peopleObj): string => obj.sex);
  let counts: any = {};
  resultArr.forEach(function (x) {
    counts[x] = (counts[x] || 0) + 1;
  });
  return counts;
}
// console.log(fn6(people));

// 7. parasyti fn kuri grazintu amziu masyva.

function fn7(arg: peopleObj[]): number[] {
  const result: number[] = arg.map((obj) => obj.age);
  return result;
}
// console.log(fn7(people));

// 8. parasyti fn findByName(arr, 'James') ji gauna masyva ir stringa argumentu. ieskom objekto pagal argumentu gauta string. jei randam grazinam ta objekta.
//    8.1 jei nerandam grazinam nauja objekta {err: not found}

function findByName(arr: peopleObj[], name: string): void {
  const result: peopleObj[] = arr.filter((obj: peopleObj) => obj.name === name);
  result.length === 0 ? console.log('{err: not found}') : console.log(result);
}
// findByName(people, 'Jonas');
// 9. parasyti fn kuri grazina visu zmoniu pavardziu ilgius.

function fn9(arg: peopleObj[]): string[] {
  const surArr: string[] = arg.map((obj: peopleObj) => obj.surname);
  const result: string[] = surArr.map(
    (item: string) => `${item} length: ${item.length}`
  );
  return result;
}
// console.log(fn9(people));

// 10. parasyti fn kuri grazina nauja masyva su objektais kurie turi papildoma key=value. Pridekime {isArchived: false} kiekvienam person objektui. Aprasyti tipa kuri grazina fn.
interface newPeopleObj {
  name: string;
  surname: string;
  sex: string;
  age: number;
  income: number;
  married: boolean;
  hasCar: boolean;
  isArchived: boolean;
}

function fn10(arg: peopleObj[]): newPeopleObj[] {
  const newArr: newPeopleObj[] = arg.map((obj: peopleObj) => ({
    ...obj,
    isArchived: false,
  }));
  return newArr;
}
const newPeopleArray = fn10(people);

// 11. issaugoti 10 punkte gauta rezultata ir paduoti i i funkcija makeDelete(<arr>, <index>). Funkcija gautame masyve index elemente pakeicia 'isArchived' savybe i true.

function makeDelete(arr: newPeopleObj[], index: number): void {
  arr[index].isArchived = true;
}
makeDelete(newPeopleArray, 0);
// console.log('newPeopleArray after ===', newPeopleArray[0]);

// ## DOM public index.html
// ### naudojam data/data.js

// 1d. Sugeneruoti items ul elemente li elementus su prekiu pavadinimu ir kaina ir mygtuku buy
// 2d. pasaudus mygtuka nuperkam preke. Tai reiskia pasalinam ja is saraso.
// 2.1d Susikuriam masyva cart. jis tures objektus {title: , price: , qty: 1}. paspaudus buy, ikeliam ta preke i cart masyva.
// 3d atvaizduojam cart masyva po prekiu sarasu.
interface shopItems {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
console.log('items ===', items);

const cards = (document.getElementById('cards') as HTMLDivElement) || null;
const list = document.createElement('ul') as HTMLUListElement;

function createElements(arg: shopItems[]) {
  cards.append(list);
  arg.forEach((obj) => {
    list.innerHTML += `
    <li id='item'>${obj.title} ${obj.price}$ 
    <button data-id=${obj.id} class='buy'>BUY</button> </li>
      `;
  });
}
createElements(items);
interface CartObj {
  title: string;
  price: number;
  qty: number;
}
let cart: CartObj[] = [];

list.addEventListener('click', (event) => {
  event.preventDefault();
  const item = document.getElementById('item') as HTMLUListElement;
  if (event.target.classList.contains('buy')) {
    const itemId = event.target.dataset.id - 1;
    const { title, price, rating } = items[itemId];
    const newObj: CartObj = {
      title,
      price,
      qty: rating.count,
    };
    cart.push(newObj);
    item.remove();
    console.log('cart ===', cart);
  }
});
