{
  // utiligy types
  console.log("utility type");

  // Pick
  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };

  type Name = Pick<Person, "name">;
  // নতুন type Name
  // type Name = Pick<কোন type থেকে pivk করবা , কোন parameter pick করবা >
  /*
    - তাহলে Name type টা হবে 
    type Name = {
        name:String;
    }
    - অর্থাৎ নতুন একটা object type তৈরি হল । 
  */
  // যদি আরো type pick করতে চাই তাহলে | চিহ্ন দিয়ে লিখতে হবে

  type NameAge = Pick<Person, "name" | "age">;

  /*
    - দেখতে হবে 
     type NameAge = {
        name:string;
        age:number
     }
  */
}

{
  // Omit type
  // Pick এর উল্টা বাদ দেয়া
  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };
  type ContactInfo = Omit<Person, "name" | "age">;
  // নতুন একটা  type গঠন হবে এবং  "name" "age" বাদ যাবে
  /*
  type ContactInfo = {
    email?: string;
    contactNo: string;
}

  */
}

{
  // Required type
  // এমন যদি চাই  type সকল type required হয়ে যাবে এবং কোন optional type থাকবেনা তখন Required type ব্যাবহার করতে হবে ।

  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };

  type PersonRequired = Required<Person>;
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
  // Partial type
  // এমন যদি চাই  type সকল type optional / partial হয়ে যাবে এবং কোন required type থাকবেনা তখন Partial type ব্যাবহার করতে হবে ।

  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };

  type PersonRequired = Partial<Person>;
  /*
    type PersonPartial = {
        name?: string | undefined;
        age?: number | undefined;
        email?: string;
        contactNo?: string | undefined;
         */
}

{
  // Readonly
  // কোন একটা object / type এর ভ্যালু পরিবর্তন করতে পারবেনা শধু পড়তে পারবে তখস Readonly ব্যাবহার হবে
  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };

  type PersonReadOnly = Readonly<Person>;

  const person1: PersonReadOnly = {
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
  // Record type
  //   type MyObj = {
  //     a: string;
  //     b: string;
  //   };

  //কিন্তু আমরা চাই dynamically type add করতে

  // genric ব্যাবহার করা লাগলনা
  // type MyObj = Recode<key এর type, value এর type>
  // উপরের MyObj কে লিখতে পারি
  type MyObj = Record<string, string>;

  const obj1: MyObj = {
    a: "aaa",
    b: "bbb",
    c: "ccc", // error show করবে
  };

  const obj2: MyObj = {
    a: "aaa",
    b: "bbb",
    c: 6, // error দেখাবে কারন আমরা Record এর দ্বিতীয় parameter string দিছি
  };

  // কখন Record use করি
  const emptyObj: Record<string, unknown> = {};

  // এটার মানে হল একটা object থাকবে যার value পরে ‍add হবে
  // এর key অবশ্যই string হবে এবং value unknown
}
