"use strict";
{
    // utiligy types
    console.log("utility type");
    /*
      - দেখতে হবে
       type NameAge = {
          name:string;
          age:number
       }
    */
}
{
    // নতুন একটা  type গঠন হবে এবং  "name" "age" বাদ যাবে
    /*
    type ContactInfo = {
      email?: string;
      contactNo: string;
  }
  
    */
}
{
    /*
    type PersonRequired = {
      name: string;
      age: number;
      email: string;
      contactNo: string;
  }
    */
}
{
    /*
      type PersonPartial = {
          name?: string | undefined;
          age?: number | undefined;
          email?: string;
          contactNo?: string | undefined;
           */
}
{
    const person1 = {
        name: "Abul",
        age: 200,
        email: "abul@mail.com",
        contactNo: "123456",
    };
    person1.name = "Mr Dabul"; // error show করবে
    // Readonly করে নেয়া হয়েছে
    console.log(person1);
}
{
    const obj1 = {
        a: "aaa",
        b: "bbb",
        c: "ccc", // error show করবে
    };
    const obj2 = {
        a: "aaa",
        b: "bbb",
        c: 6, // error দেখাবে কারন আমরা Record এর দ্বিতীয় parameter string দিছি
    };
    // কখন Record use করি
    const emptyObj = {};
    // এটার মানে হল একটা object থাকবে যার value পরে ‍add হবে
    // এর key অবশ্যই string হবে এবং value unknown
}
