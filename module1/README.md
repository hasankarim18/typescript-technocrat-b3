#### [1.7 Spread And Rest Operator](#spread-and-rest-operator)

#### [1.8 Destructuring of Objects and Array](#destructuring-of-objects-and-array)

#### [1.9 Type Alias](#type-alias)

#### [1.10 Union and Intersection Type](#union-and-intersection-type)

---

### 1.7

### Spread And Rest Operator

```
  const bros1: string[] = ["Mir", "Mizan", "Firoz"];
  const bros2: string[] = ["Tonmoy", "Nahid", "Rahat"];

  //  bros1.push(bros2); wrong apporach will show error
  bros1.push(...bros2); // write approach
  console.log(bros1);

  /* Obejcts */

  const mentors1 = {
    typeScript: "Mezba",
    redux: "Mir",
    dbms: "Mizan",
  };

  const mentors2 = {
    prisma: "firoz",
    next: "Tonmoy",
    cloud: "Nahid",
  };

 // rest operator for marging object
  const mentorList = {
    ...mentors1,
    ...mentors2,
  };

  // console.log({ mentorList });

  /** Learn rest operator */
  const greetFriends = (...friends: string[]): string => {
    console.log(friends);
    const output = `
        Hi ${friends.map((item) => item).join(", ")}
     `;

    console.log(output);
    return "hello";
  };

  greetFriends("Abul", "dabul", "kabul", "ubul");

```

---

### 1.8

### Destructuring of Objects and Array

```
 // destructuring in typescript

  const user = {
    id: 345,
    name: {
      firstName: "Hasan",
      middleName: "Mahbub ul",
      lastName: "Karim",
    },
    email: "hasan@mail.com",
    address: "Uganda",
  };

  const {
    email,
    name: { middleName: midName },
  } = user;
  console.log(midName);

```

- you cannot declare type in destructuring
  when you declare a name in destructuring it will work as `name alias`
- In the above example `midName` is a `name alias` you cant determine type here.

```
// Array destructuring
  const myFriends = [
    "Abul",
    "Kabul",
    "Dabul",
    "Sabul",
    "Ross",
    "monika",
    "fibi",
    "gibi",
  ];

  const [a, b, bestFriend] = myFriends;
  const [, , , ememy, ...rest] = myFriends;

  console.log(rest);

```

---

### 1.9

### Type Alias

- Type alias is a name for the type

```
// declaring a type
 type TStudent = {
    name: string;
    age: number;
    gender: string;
    contactNumber?: string;
    address: string;
  };

  const student1: TStudent = {
    name: "Hasan",
    age: 50,
    gender: "male",
    contactNumber: "017123",
    address: "Dhaka",
  };
  console.log("type alias");

  const student2: TStudent = {
    name: "Abul",
    age: 23,
    gender: "male",
    address: "Dhaka",
  };
```

- Type alias in a function

```

  /** type alias for a functoiin  */

  type Add = (num1: number, num2: number) => number;

  /*
  // old way of writing type
  const add = (num1: number, num2: number): number => {
    return num1 + num2;
  };
  */

  const add: Add = (a, b) => a + b;
  const add2: Add = (num1, num2) => num1 + num2;

  console.log(add(3, 4));

```

\*\* how to write type for `function ` <br>
type Add = (num1: number, num2: number) => number;

- num1 and num2 are input value and it return a number

`function one` <br>
const add = (num1: number, num2: number): number => {
return num1 + num2;
}

`function two` <br>
const add : Add = (num1 + num2) => num1+num2

- both `function one and two ` are same function
- `function two` uses type alias

---

### 1.10

### Union and Intersection Type

#### <u> Union Type </u>: TypeScript type system allows you to build new types out of existing types using variety of operators .

- `Union` is one operator : In typescript, a union type formed by combining two or more other types, allowing to hold values of any of those tpes.

- In a sense union types represents a value that could be one type or another

```
let myVariable:string | number ;
```

- this means `myVariable` can be a string or a number but not other data types.

```
{
  /** Union type */
  // we are using string literal type
  type FrontEndDeveloper = "fakibaDeveloper" | "juniorDeveloper";

  const newDeveloper: FrontEndDeveloper = "juniorDeveloper";

  type TUser = {
    name: string;
    email: string;
    genger: "male" | "female";
    isAdmin: true | false;
  };

  const user1: TUser = {
    name: "Hasan",
    email: "hasan@mail.com",
    genger: "male",
    isAdmin: true,
  };

  /** Intersection type */
}

// combining two types
{
  type TFrontEndDeveloper = "fakibaDeveloper" | "juniorDeveloper";
  type TFullStackDeveloper = "frontEndDeveloper" | "expertDeveloper";

  /** এতটা টইপ এর সাথে আর একটা টাইপ  Union করতে পারি  */
  type Developer = TFrontEndDeveloper | TFullStackDeveloper;

  /** TFrontEndDeveloper এর জন্য ২ টা উদাহরণ    */
  let frontEndDev1: TFrontEndDeveloper = "fakibaDeveloper";
  let frontEndDev2: TFrontEndDeveloper = "juniorDeveloper";

  /** TFullStackDeveloper এর জন্য ২ টা উদাহরণ    */
  let fullStackDev1: TFullStackDeveloper = "frontEndDeveloper";
  let fullStackDev2: TFullStackDeveloper = "expertDeveloper";

  /**
   * কিন্তু Developer type তৈরি করা হয়েছে TFrontEndDeveloper |TFullStackDeveloper
   * তাই Developer টাইপ দিয়ে ৪ টি আলাদা আলাদা ভেরিয়েবল তৈরি করা যাবে ।
   */
  let dev1: Developer = "fakibaDeveloper";
  let dev2: Developer = "juniorDeveloper";
  let dev3: Developer = "frontEndDeveloper";
  let dev4: Developer = "expertDeveloper";
}

```

### InterSection Type

- InterSection হল দুইটা টাইপকে একসাথে যুক্ত করা

```// intersection

  type TFrontEndDeveloper = {
    skills: string[];
    designation1: "FrontEndDeveloper";
  };

  type TBackEndDeveloper = {
    skills: string[];
    designation2: "BackEndDeveloper";
  };

  type TFullStackDeveloper = TFrontEndDeveloper & TBackEndDeveloper;

  const fullStackDeveloper: TFullStackDeveloper = {
    skills: ["HTML", "CSS", "EXPRESS"],
    designation1: "FrontEndDeveloper",
    designation2: "BackEndDeveloper",
  };

```

- উপরের উদাহরনে আমরা ওদখতে পাচ্ছি TFrontEndDeveloper ও TBackEndDeveloper দুইটা আলাদা টাইপ যাদেরকে & চিহ্ন এর মাধ্যমে intersection টাইপ TFullStackDeveloper টাইপ বানানো হয়েছে ।
- TFullStackDeveloper টাইপ ব্যাবহার করে বানানো ভেরিয়েবল fullStackDeveloper দেখলে বোঝা যায় TFrontEndDeveloper ও TBackEndDeveloper টাইপের কমন skills: string[]; টুকু একটা টাইপে পরিণত হয়েছে এবং designation1: "FrontEndDeveloper",
  designation2: "BackEndDeveloper", লিটারেল টাইপ দুইটা যোগ হয়েছে ।
