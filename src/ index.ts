import Document from "next/document";
import { concatenation } from "./concatenation";
import { reverse } from "./reverse";
import { getProperty } from "./getProperty";

let numbers = reverse<number>([1, 2, 3, 4, 5]);
console.log(numbers); // [5,4,3,2,1]

let strings = reverse<string>(['a','b','c','d','e']);
console.log(strings); // ["e",'d','c','b','a'];

const button = document.querySelector('button');
const input = document.querySelector('input');

if (button && input){
  button.addEventListener('click', () => {
    concatenation(input.value, 'hello!'); 
  });
}


const student = {
  name: 'John',
  age: 25,
  address: "New York",
}

let result = getProperty(student, "age");
console.log('result:', result);
