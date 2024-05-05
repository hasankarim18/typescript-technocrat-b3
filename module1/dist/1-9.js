"use strict";
{
    const student1 = {
        name: "Hasan",
        age: 50,
        gender: "male",
        contactNumber: "017123",
        address: "Dhaka",
    };
    console.log("type alias");
    const student2 = {
        name: "Abul",
        age: 23,
        gender: "male",
        address: "Dhaka",
    };
    /*
     // old way of writing type
     const add = (num1: number, num2: number): number => {
       return num1 + num2;
     };
     */
    const add = (a, b) => a + b;
    const add2 = (num1, num2) => num1 + num2;
    console.log(add(3, 4));
    // type alias ends
}
