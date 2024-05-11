"use strict";
{
    console.log("Introduction to generics");
    const rollNumbers = [3, 4, 5, 5];
    const rollNumbers2 = [3, 4, 5, 5];
    const rollNumbers3 = [3, 4, 5, 5];
    const students = ["abul", "dabul", "kabul", "sabul"];
    const students2 = ["abul", "dabul", "kabul", "sabul"];
    const students3 = ["abul", "dabul", "kabul", "sabul"];
    const boolArray = [true, false, true, true, false];
    const boolArray2 = [true, false, true, true, false];
    const boolArray3 = [true, false, true, true, false];
    const user = [
        {
            name: "Abul",
            age: 100,
        },
        {
            name: "Dabul",
            age: 200,
        },
    ];
    const add = (x, y) => x + y;
    const add2 = (x, y) => {
        if (typeof x === "string" && typeof y === "string") {
            return `${x} and ${y}`;
        }
        else if (typeof x === "number" && typeof y === "number") {
            return x + y;
        }
        return `${x} and ${y}`;
    };
    console.log(add2(3, 4));
    console.log(add2("abul", 2));
    console.log(add2("abul", true));
    const manush = ["Mr. x", "Mrs. Y"];
    const userWithId = [1234, { name: "abul", email: "abul@mail.com" }];
    // another way
    const userWithId2 = [
        1234,
        { name: "abul", email: "abul@mail.com" },
    ];
    const userWithId3 = [
        20,
        {
            name: "Abul",
            email: "abul@mail.com",
        },
    ];
    // 2.3 end introduction to generics
}
