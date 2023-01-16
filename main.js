// let username = 'Mark';
// console.log(username);

// username = 'Igor';
// console.log(username);

// const time = 20;

// if (time < 12) {
//   console.log('Good morning');
// } else if (time >= 12 && time < 18) {
//   console.log('Good day');
// } else {
//   console.log('Good evening');
// }

// ======================Тернарный оператор============

// if (10 < 12) {
//   console.log('It is true');
// } else {
//   console.log('It is false');
// }

//(условие)? (условие верно): (условие не верно)

// 15 < 12 ? console.log('It is true') : console.log('It is false');

// let greeting;
// let time = 10;
// if (time < 12) {
//   greeting = 'Good morning';
// } else {
//   greeting = 'Good day';
// }

// console.log(greeting);

// let time = 20;
// greeting = time < 12 ? 'Good morning' : 'Good day';

// console.log(greeting);

// =======================Concat==================

// let greeting = 'Hi, Mark';

// let howAreYou = 'How are you?';

// console.log(`${greeting} ! ${howAreYou}`);

// ========================Function==================

// console.log(' Hi, my dear client');

// function sayHi() {
//   console.log(' Hi, my dear client');
// }

// sayHi();

//function declaration

// sayHi();

// function sayHi() {
//   console.log('Hi');
// }

//function expression

// let sayHi = function () {
//   console.log('Hi');
// };
// sayHi();

// =================Params & arguments==========

// const userName = 'Mark';
// console.log(`Hi, ${userName}! How are you?`);

// function sayHi(name) {
//   console.log(`Hi, ${name}! How are you?`);
// }

// sayHi('Lev');

// ==================return==================

// function sum(a, b) {
//   const result = a + b;

//   return result;
// }

// let res = sum(10, 15);
// console.log(res);

// =======================function like argument===========

// function sum(a, b) {
//   return a + b;
// }

// function dif(a, b) {
//   return a - b;
// }

// function doSomething(func) {
//   let result = func(10, 15);
//   console.log(result);
// }
// doSomething(sum); //25
// doSomething(dif); //-5

// ======================Function  ========================

// (function () {
//   console.log('Hi, my dear friend');
// })();

// (function sum(a, b) {
//   console.log(a + b);
// })();

// ============================== function => ===================

// function sayHi(name) {
//   console.log(`Hi, ${name}! How are you?`);
// }

// sayHi('Bob');

// const arrSayHi1 = name => {
//   console.log(`Hi, ${name}! How are you?`);
// };

// arrSayHi1('Bob');

// const arrSayHi2 = name => console.log(`Hi, ${name}! How are you?`);
// arrSayHi2('Bob');

// ============================ Array ===========================/

// const autoBrand1 = 'Audi';

// const autoBrand2 = 'BMW';

// const autoBrand3 = 'Subaru';

// const autoBrand4 = 'Kia';

// const autoBrands = ['Audi', 'BMW', 'Subaru', 'Kia'];

// console.log(autoBrands);

// console.log(autoBrands[2]);

// =========================== Methods of Array ======================

// .push(), .pop(), shift(), unshift(), .splice(), .slice(),

// .forEach(), .indexOf(), .includes()

// const autoBrands = ['Audi', 'BMW', 'Subaru', 'Kia'];

// console.log(autoBrands);

// autoBrands.push('Volvo');
// console.log(autoBrands);

// autoBrands.splice(2, 1);
// console.log(autoBrands);

// ============================== Cycles ======================

// for (let i = 0; i < 10; i += 1) {
//   console.log(i);
// }

// ================================ Обход массива циклом  for=========

// const autoBrands = ['Audi', 'BMW', 'Subaru', 'Kia'];

// for (i = 0; i < autoBrands.length; i += 1) {
//   console.log(autoBrands[i]);
// }

// ========================== Обход массива циклом  for of ==============

// const autoBrands = ['Audi', 'BMW', 'Subaru', 'Kia'];

// for (let item of autoBrands) {
//   console.log(item);
// }

// ============================= Обход массива методом forEach()==========

// const autoBrands = ['Audi', 'BMW', 'Subaru', 'Kia'];

// autoBrands.forEach(function (item) {
//   console.log(item);
// });

// =========================== Objects =====================================

// Свойства объектов

// let userName = 'Mark';

// let age = 30;

// let isMarried = false;

// const person = {
//   userName: 'Mark',
//   age: 30,
//   isMarried: false,
//   // profession: 'Account',
// };

// console.log(person);
// console.log(person.age);
// // console.log(person['userName']);

// // let propertyName = 'profession';
// // console.log(person[propertyName]);

// person.profession = 'JS developer';
// console.log(person);

// ============================= Methods in objects ======================

// const person = {
//   userName: 'Mark',
//   age: 30,
//   isMarried: false,
//   sayHi: function (name) {
//     console.log(`Hello,${name}`);
//   },
// };

// person.sayHi('David');

// ==================================== this =================

// const person = {
//   userName: 'Mark',
//   age: 30,
//   isMarried: false,
//   sayHi: function (name) {
//     console.log(this);
//     console.log(`Hello,${name} my name is ${this.userName}`);
//   },
// };

// person.sayHi('David');

// ==== Объекты обход циклом for in ( не путать с for of)==

// const person = {
//   userName: 'Mark',
//   age: 30,
//   isMarried: false,
//   sayHi: function (name) {
//     console.log(`Hello,${name} my name is ${this.userName}`);
//   },
// };

// for (let key in person) {
//   console.log(key, ':', person[key]);
// }

// ==== Классы. Конструкторы объектов ======

class Person {
  constructor(userName, age, isMarried) {
    this.userName = userName;
    this.age = age;
    this.isMarried = isMarried;
  }

  sayHi(name) {
    console.log(`Hello,${name} my name is ${this.userName}`);
  }
}

const person1 = new Person('Mark', 30, false);
const person2 = new Person('David', 40, true);

console.log(person1);
console.log(person2);
person2.sayHi('David');
