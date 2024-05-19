"use strict";
{
    // maped types
    console.log("maped typed");
    const arrOfNumbers = [1, 2, 3, 4];
    //   const arrOfStrings: string[] = ['1', '2', '3', '4'];
    const arrOfStrings = arrOfNumbers.map((number) => number.toString());
    console.log(arrOfStrings);
    // এই AreaString ও ArrayStringMapped একই type। এখানে ArrayStringMapped type কে AreaNumber ব্যাবহার করে করা হয়েছে ।
}
{
    // আনেকটা object destructuring এর মত কাজ করে
    const area1 = {
        height: "100",
        width: 50,
    };
    // ```
    /*
    type Area<T> = {
      [key in keyof T]: T[key]
    }
  
    // --> area1 এর জন্য
    - এখানে type এর ভিতর looping চলে তাই
    - তাই একবার height দিয়ে looping পাব --> সেক্ষেত্রে T[key] হবে ‍ string
    
    - তাই একবার width দিয়ে looping পাব --> সেক্ষেত্রে T[key] হবে ‍ number
  
    - T[key] lookup করে type বের করে নিয়ে আসবে
   
    ```
  
    ```
  
  
    */
}
