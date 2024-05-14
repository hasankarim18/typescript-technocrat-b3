"use strict";
{
    // generic Constraint using key of
    // - typescript এ একটা keyof operator আছে সেটা দিয়ে আমরা generic তৈরি করতে পারি ।
    console.log("generic constraints by key of");
    // - n.b. type Owener1 ও Owener2 একই কাজ করবে এবং তারা exactly same । keyof operator ব্যাবহার করে আমরা shortcut করেছি ।
    const bikeOwener = "bike";
    const carOwener = "car";
    const user = {
        name: "Mr. X",
        age: 20,
        address: "Dhaka",
    };
    const lexus = {
        model: "G, 2024",
        brand: "Lexux",
        year: 2024,
    };
    const getPropertyValue = (obj, key) => {
        return obj[key];
    };
    const result = getPropertyValue(user, "name"); // "Mr. X",
    const car = getPropertyValue(lexus, "model"); //  "G, 2024"
    //
}
