{
  // maped types
  console.log("maped typed");
  const arrOfNumbers: number[] = [1, 2, 3, 4];
  //   const arrOfStrings: string[] = ['1', '2', '3', '4'];
  const arrOfStrings: string[] = arrOfNumbers.map((number) =>
    number.toString()
  );

  console.log(arrOfStrings);

  type AreaNumber = {
    height: number;
    width: number;
  };

  // একটা type এর key গুলো ব্যাবহার করে অন্য এটা type তৈরি করে ফেলা

  // একটা simple type কে define করার জন্য type কে আবার define করতে হচ্ছে

  type AreaString = {
    height: string;
    width: string;
  };

  // এখন dynamically আমরা এটা করতে চাচ্ছি mapped type এর মাধ্যমে ।
  type ArrayStringMappedHardCode = {
    [key in "height" | "width"]: string;
  };

  // or more proficient way of writting using keyof operator

  type ArrayStringMapped = {
    [key in keyof AreaNumber]: string;
  };

  // এই AreaString ও ArrayStringMapped একই type। এখানে ArrayStringMapped type কে AreaNumber ব্যাবহার করে করা হয়েছে ।
}

{
  //  ```
  // genric
  type AreaNumber = {
    height: number;
    width: number;
  };

  // generic mapped of
  // T => {height:string:width:number}
  // key => T["width"] or T["height"]
  type Area<T> = {
    [key in keyof T]: T[key];
  };

  type Height = AreaNumber["height"]; // number
  // আনেকটা object destructuring এর মত কাজ করে

  const area1: Area<{ height: string; width: number }> = {
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
