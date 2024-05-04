"use strict";
// function
function add(a, b) {
    return a + b;
}
const result = add(2, 3);
console.log(result);
const addArror = (a, b = 10) => a + b;
const result2 = addArror(3);
console.log({ result2 });
const richUser = {
    name: "Hasan",
    balance: 0,
    addBalance(balance) {
        return `My new balance is ${this.balance + balance}`;
    },
};
const arr = [1, 4, 10];
const newArray = arr.map((elem) => elem * elem);
console.log(newArray);
const squreArray = (arr) => {
    return arr.map((elem) => elem * elem);
};
const sq = squreArray(arr);
console.log({ sq });
