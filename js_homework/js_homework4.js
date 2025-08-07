"use strict";

let count = 1000;

function generateRandomeValue(count) {
    let countEvenNumber = 0;
    let countOddNumber = 0;
    for (let i = 1; i <= count; i++) {
        let randomValue = Math.floor(Math.random() * 901 + 100);
        console.log(randomValue);
        if (randomValue % 2 === 0) {
            countEvenNumber++;
        } else {
            countOddNumber++;
        }
    }
    let evenPercent = checkPercentageRatio(countEvenNumber, count);
    let oddPercent = checkPercentageRatio(countOddNumber, count);

    console.log(`Total count of even numbers: ${countEvenNumber} (${evenPercent}%)`);
    console.log(`Total count of odd numbers: ${countOddNumber} (${oddPercent}%)`);

    if (countEvenNumber === countOddNumber) {
        console.log("Even and odd numbers are generated equally: 50% / 50%");
    } else {
        console.log("Even and odd numbers are NOT generated equally");
    }
}
generateRandomeValue(count);


function checkPercentageRatio(part, total) {
    return ((part * 100) / total).toFixed(2);
}