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

// class Person {
//   constructor(userName, age, isMarried) {
//     this.userName = userName;
//     this.age = age;
//     this.isMarried = isMarried;
//   }

//   sayHi(name) {
//     console.log(`Hello,${name} my name is ${this.userName}`);
//   }
// }

// const person1 = new Person('Mark', 30, false);
// const person2 = new Person('David', 40, true);

// console.log(person1);
// console.log(person2);
// person2.sayHi('David');

// ================== Выбор DOM элементов ================

// Выбор одного элемента  DOM  по селектору

// document.querySelector('selector');

// const heading2 = document.querySelector('h2').classList.add('red');
// heading2.classList.add('red');

// change collection elements

// const headings = document.querySelectorAll('h2');
// console.log(headings);

// // headings.classList.add('red-text');

// for (let heading of headings) {
//   console.log(heading);
//   heading.classList.add('red-text');
// }

// const paragraphs = document.querySelectorAll('p');
// // for (let p of paragraphs) {
// //   p.classList.add('green-text');
// // }

// //

// ============== Work with CSS class=====================

// const heading = document.querySelector('h2');
// // console.log(heading);

// // heading.classList.add('red-text');
// // heading.classList.remove('red-text');

// // // heading.classList.toggle('green-text');
// // // heading.classList.toggle('green');

// heading.classList.contains('green');

// ==================== Work with attributes ===============

// const img = document.querySelector('#logo');

// img.setAttribute('src', './img/php.png');
// img.setAttribute('width', '200');

// img.src = './img/js.png';

// const button = document.querySelector('#button');

// button.setAttribute('value', 'Send');

// button.value = 'Text for button';

// ====================== Work with listener events================

// const button = document.querySelector('#button');

// const img = document.querySelector('#logo');

// button.value = 'Delete';

// button.addEventListener('click', function () {
//   console.log('Click!');
//   img.remove();
// });

// // button.onClick = function () {
// //   console.log('Click!');
// //   img.remove();
// // };

// ====================== Work with listener events part 2================

// const inputText = document.querySelector('#input-text');

// const textBlock = document.querySelector('#text-block');

// inputText.addEventListener('input', inputHandler);

// function inputHandler() {
//   console.log(inputText.value);
//   textBlock.innerText = inputText.value;
// }

// ===================== Object event ======================

// const list = document.querySelector('#list');

// list.addEventListener('click', function (e) {
//   // console.log(this);
//   // console.log(e);
//   console.log(e.target);
// });

// ======================= Work with elements =================

// change a container

const container = document.querySelector('#elementsContainer');

// create header
const newHeader = document.createElement('h1');

newHeader.innerText = 'New Header';

container.append(newHeader);

// ========== Copy header ========================================

// const mainHeader = document.querySelector('header');
// const headerCopy = mainHeader.cloneNode(true);

// container.append(headerCopy);

// ===================== вставка разметки через строки ==========

// const htmlExample = '<h2> Header one else </h2>';
// container.insertAdjacentHTML('beforeend', htmlExample);

// const title = 'Text of header';
// const htmlExample = `<h2>${title}</h2>`;
// container.insertAdjacentHTML('beforeend', htmlExample);

// ===================== ToDO list tasks ==========================

// const todoList = document.querySelector('#todo-list');
// const todoForm = document.querySelector('#todo-form');
// const todoInput = document.querySelector('#todo-input');

// // todoForm.addEventListener('submit', formHand);

// // function formHand(e) {
// //   e.preventDefault();

// const taskText = todoInput.value;

// // const li = `<li>${taskText} </li>`;

// // }

// const newTask = document.createElement('li');
// newTask.innerText = taskText;

// todoList.append(newTask);

// // todoList.insertAdjacentHTML('beforeend', li);

// todoInput.value = '';

// // ================= setInterval =======================

// const timerIntervalID = setInterval(function () {
//   console.log('Fired!');
// }, 1000);

// console.log(timerIntervalID);

// // clearInterval(timerIntervalID)

// // =============== setTimeout =================================

// const timerID = setInterval(function () {
//   console.log('setInterval Fired!');
// }, 1000);

// setTimeout(function () {
//   clearInterval(timerID);
// }, 10000);

// ============================  ====================================

// const counterElement = document.querySelector('#counter');

// let counter = 0;
// let timerID;

// // setInterval(function () {
// //   counter += 1;

// //   counterElement.innerText = counter;
// // }, 1000);

// // start
// const btnStart = document.querySelector('#start');
// btnStart.onclick = function () {
//   timerID = setInterval(function () {
//     counter += 1;
//     counterElement.innerText = counter;
//   }, 1000);
// };

// // pause

// const btnPause = document.querySelector('#pause');
// btnPause.onclick = function () {
//   clearInterval(timerID);
// };

// // reset

// const btnReset = document.querySelector('#reset');
// btnReset.onclick = function () {
//   counter = 0;
//   counterElement.innerText = counter;
//   clearInterval(timerID);
// };

// ============================== Callback. Callback hell ======================

// setTimeout(function () {
//   console.log('Step 1');
//   setTimeout(function () {
//     console.log('Step 2');
//     setTimeout(function () {
//       console.log('Step 3');
//     }, 1000);
//   }, 1500);
// }, 2000);

// function checkRooms() {
//   setTimeout(function () {
//     console.log('Check rooms in hotel...');
//     const availableRooms = false;

//     if (availableRooms) {
//       console.log('The rooms correct');
//       console.log('we are go!');
//     } else {
//       console.log('The rooms are not');
//       console.log("We aren't go");
//     }
//   }, 1000);
// }

// checkRooms();

// function checkRooms(success, failed) {
//   setTimeout(function () {
//     console.log('Check rooms in hotel...');
//     const availableRooms = true;

//     if (availableRooms) {
//       let message = 'We have the rooms';
//       success(message);
//     } else {
//       let message = "We haven't the rooms";
//       failed(message);
//     }
//   }, 2000);
// }

// function checkTickets(message, success, failed) {
//   setTimeout(function () {
//     console.log('------function checkTickets------');
//     console.log('Ответ на предыдущем шаге:', message);

//     console.log('Check avian tickets');

//     const availableTickets = true;

//     if (availableTickets) {
//       let message = 'OK';
//       success(message);
//     } else {
//       let message = 'failed';
//       failed(message);
//     }
//   }, 500);
// }

// function cancelVacation(message) {
//   console.log('---cancelVacation----');
//   console.log('Ответ на предыдущем шаге:', message);
//   console.log('Отпуск отменяется...');
// }

// function submitVacation(message) {
//   console.log('---submitVacation----');
//   console.log('Ответ на предыдущем шаге:', message);
//   console.log('Едим в отпуск ...');
// }

// checkRooms(
//   function (messageFromCheckRooms) {
//     checkTickets(
//       messageFromCheckRooms,
//       function (messageFromCheckTickets) {
//         submitVacation(messageFromCheckTickets);
//       },
//       function (messageFromCheckTickets) {
//         cancelVacation(messageFromCheckTickets);
//       }
//     );
//   },
//   function (messageFromCheckRooms) {
//     cancelVacation(messageFromCheckRooms);
//   }
// );

// ==================== Promise ========================

// const myPromise = new Promise(function (resolve, reject) {
//   console.log('Promise created');

//   setTimeout(function () {
//     const response = true;
//     if (response) {
//       let message = 'Success';
//       resolve(message);
//     } else {
//       let message = 'Failed';
//       reject(message);
//     }
//   }, 1500);
// });
// myPromise
//   .then(function (data) {
//     return new Promise(function (resolve, rej) {
//       setTimeout(() => {
//         console.log('Then 1');
//         console.log('Success');

//         const response = true;
//         if (response) {
//           resolve('Data from then 1');
//         } else {
//           reject('Data from then 1');
//         }

//         resolve();
//       }, 1000);
//     });
//   })
//   .then(function (data) {
//     setTimeout(() => {
//       console.log('Then 2');
//     }, 500);
//   })
//   .catch(function (data) {
//     console.log('catch');
//     console.log(data);
//   });

// ============== Цепочка promise =================

// const checkRooms = new Promise(function (res, rej) {
//   setTimeout(function () {
//     console.log('Check room numbers.....');
//     const availableRooms = false;
//     console.log(availableRooms);

//     if (availableRooms) {
//       res('The rooms number ok!');
//     } else {
//       rej('The room numbers none');
//     }
//   }, 1500);
// });

// checkRooms
//   .then(function (data) {
//     return new Promise(function (res, rej) {
//       setTimeout(() => {
//         console.log('Check the tickets ');
//         const availableTickets = true;
//       }, 1000);
//     });
//   })
//   .catch(function (data) {
//     console.log('--catch--');
//     console.log('come back step', data);
//     console.log('not ok!');
//   });

// ====== async function =============

// function promiseFunction() {
//   return new Promise(function (res, rej) {
//     setTimeout(() => {
//       const result = true;
//       if (result) {
//         res('Done!');
//       } else {
//         rej('Fail!');
//       }
//     }, 500);
//   });
// }

// async function startPromise() {
//   const result = await promiseFunction();
//   console.log(result);
// }
// startPromise();

// ============ database from server =================

// async function getCurrencies() {
//   const url =
//     'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';

//   const res = await fetch(url);
//   const data = await res.json();

//   console.log(data);
// }

// getCurrencies();
