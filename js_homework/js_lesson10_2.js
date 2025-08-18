"use strict";
//Опис ДЗ: Напишіть регулярний вираз, який знайде послідовність з шести 
// або більше символів, які не містять літери «А» (великої або малої)

//Повинен знаходити: Wonderful, Joyful

//Не повинен знаходити: Happiness, Time, Task, Apple
var str = "Task Joyful Apple Wonderful Happiness Time";

//option #1
var re1 =  /\b([^a\s]{6,})\b/gi;

//option #2
var re2 =  /(^|\s)([^a]{6,})(?=\s|$)/gi;

console.log(str.match(re1));
console.log(str.match(re2));

