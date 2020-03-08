import $ from 'jquery';
import { log, logTitle } from './WindowLogger';

//Importing all

// import * as Math from './js/Math';
// log(Math.add(2,2));
// log(Math.divide(2,2));
// log(Math.substract(2,2));
// log(Math.multiply(2,2));
// log(Math.PI);

//Importing specific

// import {add,PI}  from './js/Math';
// log(add(2,2));
// log(PI);

//Importing default

// import Animal from './js/Animal';
// var animal = new Animal();
// log(animal.getClassType());

//Let and var scopes

// logTitle('Let keyword');
//Var example
// for(var i=0;i<5;i++){
//     log(i);
// }
// log(i);
//Let example
// for(let i=0;i<5;i++){//function scoped variable
//     log(i);
// }
//log(i); will break!!!, never use var again!

//Const examples

// logTitle('Const keyword');
//cont keyword means read only
// const name = 'Maria';
// name = 'santi'; //will fail
// const anArray = [];
// anArray.push(1);
// anArray.push(2);
// anArray = []; //will fail!

//Template literals

// logTitle('Template literals');
// const name = "Santi";
// const age = "31";
// const location = "Argentina";
// log(name+" is "+age+" and lives in "+location);
// log(`${name} is ${age} and lives in ${location}`);


//Spread Operator Arrays

// logTitle('Spread Operator Arrays');
// const arrayOne = [1,2,3];
// const arrayTwo = [11,22,33];
// log([...arrayOne,...arrayTwo]);
//
// const name = "Santi";
// log([...name]);
//
// const add = (n1,n2,n3) => { return n1+n2+n3 };
// const params = [1,2,3];
// log(add(params[0],params[1],params[2])); //Bad way
// log(add(...params)); //Much better

//Spread Operator Objects

// logTitle('Spread Operator Object');
// const address = {
//   city: "LA",
//   country: "USA",
//   postCode: "LA44"
// };
//
// const name = {
//   first: "Tino",
//   last: "Pepinos"
// };
//
// const person = {...name,...address};
// log(JSON.stringify(person,null,2));


//Lexical this

// logTitle('Lexical this');
//Arrow functions do not override this reference b/c does not have context
// const person = {
//   name: 'Santi',
//   vehicles: ['Peugeot 207','Suzuki gn125'],
//   toString: function() {
//     this.vehicles.forEach( v => {
//         log(`${this.name} has ${v}`)
//     });
//   }
// }
//
// person.toString();

//Enhanced object Properties

// logTitle('Enhanced object properties');
//
// const brand = 'Bran';
// const calculator = (name, theBrand) => {
//   return {
//     name,//Same as  name: name
//     add(n1, n2) { //same as add: (n1,n2) => { ... }
//       return n1 + n2
//     },
//     [`${brand}d`] : theBrand // same as brand: theBrand
//   }
// }
//
// const calc = calculator('super calc','casio');
// log(calc.name);
// log(calc.add(3,3));
// log(calc.Brand);


//Array destructuring

// logTitle('Array destructuring');

// const numbers = [1,2,3,4,5];
// // const one = numbers[0];
// // const two = numbers[1];
// // const three = numbers[2];
//
// const [one, , three, ...restOfNumbers] = numbers;
//
// log(one);
// // log(two);
// log(three);
// log(restOfNumbers);

//Object destructuring

// logTitle('Object destructuring');
// const person = {
//   name: "Tino",
//   address: {
//     street: "Presidente Illia",
//     number: 1157,
//     coordinates: {
//       lon: 15.43434,
//       lat: 14.32323
//     }
//   }
// };
//
// log(person.name);
// const {name} = person;
// log(name);
// log(person.address.coordinates.lon);
// const { address: {coordinates: {lon: longitude }}} = person;
// log(longitude);

//Promises
// logTitle('Promises');
//
// const namesPromise = new Promise((resolve,reject) => {
//   setTimeout(()=>{
//     resolve(['Santi','Vero','Bodi']);
//   },3000);
//
//   setTimeout(()=>{
//     resolve("Something failed");
//   },5000);
// });
//
// const nicksPromise = new Promise((resolve,reject) => {
//   setTimeout(()=>{
//     resolve(['Aime','Veristides','Gorda Leona']);
//   },3000);
//
//   setTimeout(()=>{
//     resolve("Something failed");
//   },5000);
// });
//
// namesPromise.then( response => {
//   log(response);
// }).catch( error => {
//   log(error);
// });
// //Promise.all : all the promises must be fullfilled or it will fail
// Promise.all([namesPromise,nicksPromise]).then( response => {
//   const [names,nicks] = response;
//   for (var i = 0; i < names.length; i++) {
//     log(`${nicks[i]} is ${names[i]}`);
//   }
// }).catch( error => {
//   log(error);
// });

// logTitle('Promises and fetch API');
//
// const getRandomUser =   n => {
//   //Fetch executes requests fetch(url) returns a promise
//   const fetchRandomUsers = fetch(`https://randomuser.me/api/?results=${n}`);
//   fetchRandomUsers.then(data => {
//     data.json().then(jsonData => {
//       jsonData.results.forEach(user => {
//         const { gender,email } = user;
//         log(gender);
//         log(email);
//       });
//     });
//   });
// };
//
// getRandomUser(10);

//Generators
// logTitle('Generators');
//
// const genarateObjects = function* () {
//   yield 1;
//   yield "Santi";
//   yield {name: "Santiago"};
//   return "Generator DONE!";
// }
//
// const generator = genarateObjects();
// log(generator.next().value);
// log(generator.next().value);
// log(generator.next().value.name);
// log(generator.next().value);
// log(generator.next().value);
// log(generator.next().value);

// const getNumbers = function* (numbers) {
//   for (var i = 0; i  < numbers.length; i++) {
//     yield numbers[i];
//   }
// };
//
// const numbersGen = getNumbers([1,2,3,4,5]);
// const interval = setInterval(() => {
//   const next = numbersGen.next();
//   if (next.done) {
//     log("this generator is DONE!");
//     clearInterval(interval);
//   }else {
//     const number = next.value;
//     log(number);
//   }
// },1000);
