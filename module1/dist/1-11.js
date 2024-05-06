"use strict";
{
    /*
      - `Ternary`
  - `Optional Chaining`
  - `Nullish Coalescing`
      */
    // ternary operator  || optinal chaiining || nullish coalescing
    const age = 15;
    if (age >= 18) {
        console.log("adult");
    }
    else {
        console.log("Not adult");
    }
    // ternary operator
    const isAdult = age >= 18 ? "adult" : "not adult";
    // console.log({ isAdult }); // 'not adult'
    // nullish qualescing operator
    // যদি null বা  undefined এর উপর ভিত্তি করে ডিসিসন নিতে হয় এবং ভ্যালু যদি null বা  undefined হয় তাহলে default value সেট করা হবে তাহলে তাকে nullish qualescing operator বলে / সেখেত্রে nullish qualescing operator ব্যাবহার করা হয় ।
    const isAuthenticated = null;
    const result1 = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : "Guest";
    const result2 = isAuthenticated ? isAuthenticated : "Guest";
    console.log({ result1 }); // "Guest"  // empty string,
    console.log({ result2 }); // "Guest"
    /*
      নোট : টারনারি  অপারেটর ও নালিশ অপারেটরের মধ্যে পার্থক্য হল টার্নারি অপারেটর সকল falsy value যেমন empty string, null, undefined এর জন্য কাজ করবে কিন্তু
      - nullish qualescing operator শুধুমাত্র null, undefined, হলেই কাজ করবে অন্য falsy value যেমন empty string কে সে falsy কনসিডার করবেনা ।
      - নিচের উদাহরন দেয়া হল :
    */
    const firstName = "";
    const result3 = firstName !== null && firstName !== void 0 ? firstName : "Guest";
    const result4 = firstName ? firstName : "Guest";
    console.log({ result3 }); // ""  // এখানে empty string কে falsy value কনসিডার করে নাই ।
    console.log({ result4 }); // "Guest"
    const user = {
        name: "Hasan",
        address: {
            city: "Dhaka",
            road: "New Eskaton",
            presentAddress: "Eastern Valey",
        },
    };
    const permanentAddress = user.address.permanentAddress;
    //   const permanentAddress =
    //     user?.address?.permanentAddress ?? "No permenant Address";
    //   console.log({ permanentAddress });
    //
}
