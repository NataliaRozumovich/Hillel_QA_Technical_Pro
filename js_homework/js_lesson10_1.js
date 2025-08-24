"use strict";
//У нас параноя, ми не довіряємо жодним адресам, окрім зареєстрованих на доменах gmail.com та yahoo.com.
//За допомогою регулярного виразу створіть масив з адресами, гідними довіри. 
// Постарайтеся також зробити просту валідацію до @
//-одне, або два слова які можуть містити (латинські букви, цифри) яке може бути розділене крапкою.

var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru"
    },
];

var emailPattern = /^[0-9a-zA-Z]+(\.[0-9a-zA-Z]+)?@(gmail|yahoo).com$/;

console.log(arr.filter(checkEmail));

function checkEmail (obj) {
    return emailPattern.test(obj.email);
}

