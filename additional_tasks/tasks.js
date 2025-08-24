"use strict";
/*Task description : 
Create a string containing your first and last name. Then use string operations to find the length of 
the string (number of characters), the first letter of your first name.*/

const fullName = "Ваше_ім'я Ваше_прізвище";
const lengthOfName = fullName.length// напишіть тут свій код
const firstLetterOfName = fullName.charAt(0)// напишіть тут свій код
export { fullName, firstLetterOfName, lengthOfName }; // цей рядок не має змінюватись

/*Condition:
Use mathematical operations to find the sum, difference, product and quotient of these numbers.*/
const num1 = 10;
const num2 = 5;
let sum = num1+num2;//створіть тут змінну що зберігає постійні значення з ім'ям sum яка має зберігати суму чисел

let difference = num1-num2;//створіть тут змінну що зберігає постійні значення з ім'ям difference яка має зберігати різницю чисел

let product = num1*num2;//створіть тут змінну що зберігає постійні значення з ім'ям product яка має зберігати добуток чисел

let quotient = num1/num2;//створіть тут змінну що зберігає постійні значення з ім'ям quotient яка має зберігати частку чисел

export { num1, num2, sum,difference, product, quotient }; // цей рядок не має змінюватись

/*Condition:
Create a variable yearOfBirth that contains your year of birth. Using the typeof operator, determine 
the data type of this variable. Print the result to the console.For each task, provide JavaScript
 code samples that perform the specified actions.*/

 let yearOfBirth = 1984;// Напишіть код сюди

export { yearOfBirth }; // цей рядок не має змінюватись

/*Condition:
Create a variable temperature and assign it any temperature. Also, create a temperatureResult
 variable that will store the temperature status: ‘Cold’ or ‘Hot’. Write a conditional construct
  that assigns the temperatureResult variable the value ‘Hot’ or ‘Cold’ depending on the temperature.
   Consider the temperature above 25 degrees as ‘hot’.*/

let temperature = 30;
let temperatureResult;
if(temperature>25){
temperatureResult = 'Гаряче'
}else{temperatureResult = 'Холодно'}

export { temperatureResult, temperature };

/*Task description: 
Write the body of a function that takes the number n as an argument and calculates the sum of all 
numbers from 1 to n.*/
export function sumOfNumbers(n) {
  let sum = 0;
 // Напишіть тут ваш код
  for (let i =1; i<=n; i++){
sum=sum +i;
}
  return sum;
}

console.log("Сума чисел: " + sumOfNumbers(5));

/*Task description: Write the body of a function that takes an integer x as an argument and checks 
if it is even. The function should return true if the number is even and false if the number is odd.*/
export function isEven(x) {
   // Напишіть тут ваш код
  let result;
  if (x%2===0){
    result=true;
}else{
result = false;}
  return result;
}

const number = 7;
console.log(`Число ${number} парне: ${isEven(number)}`);

/*Task description: Create a simple script that accepts a string from the user and then uses a
 JavaScript primitive method to change all characters to uppercase. Write a convertToUpperCase
  function that takes a string and returns a new string with all characters in uppercase.*/

  export function convertToUpperCase(inputString) {
  // напишіть ваш код тут
  
  let uppercaseString = inputString.toUpperCase();
  return uppercaseString;
}
/*Task description: Write the body of a customToString function that uses a JavaScript primitive 
method to convert a number to a string. The function must accept a number and return it as a string.*/
export function customToString(number) {
 // напишіть ваш код тут
  
  let str = number.toString();
  return str;
}

Condition:

Create an object named book. This object must have the following properties:

- title

- author

- year

/*Assign values to these properties: for title and author, it will be a string, and for year, 
it will be a number.*/

let book = {title: "War and Peace", author: "Lev Tolstoy", year: 1869}

export default book;

/*Task description: Find the largest and smallest elements in an array.*/
export const numbers = [10, 5, 8, 2, 17, 30, 1];

export function findMax(arr) {
    return Math.max(...arr);
}

// Функція для знаходження найменшого елемента
export function findMin(arr) {
    return Math.min(... arr)
}

// Використання функцій для знаходження найбільшого і найменшого елементів
const max = findMax(numbers);
const min = findMin(numbers);

console.log("Найбільший елемент: " + max);
console.log("Найменший елемент: " + min);

/*Write the body of the isSortedDescending function that checks if the array is sorted in
 descending order.*/
 export function isSortedDescending(arr) {
  if (arr.length <= 1) {
    return true; // Empty or single-element arrays are considered sorted
  }

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      return false; // Found an element that violates descending order
    }
  }

  return true; // All elements are in descending order
}

/*Task description: Use regular expressions to replace all phone numbers with ‘XXX-XXX-XXXX’ in
 a string.*/

 function hidePhoneNumbers(text) {
  var pattern =/\d{3}-\d{3}-\d{4}/g // напишіть ваш код тут

  return text.replace(pattern, "XXX-XXX-XXXX");
}
export default hidePhoneNumbers;

/*Task description: Check if the provided 2 emails are valid*/
function isValidEmail(email) {
// напишіть ваш код тут
var re = /^([0-9a-zA-z._])+@([a-z]).[a-z]/g;
return re.test(email);
};

export default isValidEmail;