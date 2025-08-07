"use strict"

var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",
    "minPrice": function minPrice() {
        let minPrice;
        let IsFirstPrice = true;
        for (let key in services) {
            let value = services[key];
            if (typeof value === "string" && value.includes("грн")) {
                let newPrice = parseInt(value);
                if (!isNaN(newPrice)) {
                    if (IsFirstPrice) {
                        minPrice = newPrice;
                        IsFirstPrice = false;
                    } else if (newPrice < minPrice) {
                        minPrice = newPrice;
                    }
                }
            }
        }
        return minPrice;
    },
    "maxPrice": function maxPrice() {
        let maxPrice;
        let IsFirstPrice = true;
        for (let key in services) {
            let value = services[key];
            if (typeof value === "string" && value.includes("грн")) {
                let newPrice = parseInt(value);
                if (!isNaN(newPrice)) {
                    if (IsFirstPrice) {
                        maxPrice = newPrice;
                        IsFirstPrice = false;
                    } else if (newPrice > maxPrice) {
                        maxPrice = newPrice;
                    }
                }
            }
        }
        return maxPrice;
    },
    "price": function price() {
        let totalPrice = 0;
        for (let key in services) {
            let value = services[key];
            if (typeof value === "string" && value.includes("грн")) {
                let parsed = parseInt(value);
                if (!isNaN(parsed)) {
                    totalPrice += parsed;
                }
            }
        }
        return totalPrice;
    }
};

services['Розбити скло'] = "200 грн";
services['Виїзд мастера додому'] = "500 грн";
services['Послуги з візажу'] = "1000 грн";
services['Кава'] = "50 грн";

console.log("Min price: " + services.minPrice() + " грн");
console.log("Max price: " + services.maxPrice() + " грн");
console.log("Total price: " + services.price() + " грн");