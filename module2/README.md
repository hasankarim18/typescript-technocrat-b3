# Module 2 Advance Types of TypeScript

`2-1:` [Types assertion type narrowing](#2-1-types-assertion-type-narrowing)

`2-2:` [Interface Type vs Interface](#2-2-interface-type-vs-interface)

`2-3:` [Introduction to generics](#2-3-introduction-to-generics)

`2-4:` [Generic with interface](#2-4-generic-with-interface)

`2-5:` [Function with generics](#2-5-function-with-generics)

`2-6:` [Constraints in typescript](#2-6-constraints-in-typescript)

`2-7:` [Constraint using key of](#2-7-constraint-using-key-of)

`2-8:` [Asynchronous typescript](#2-8-asynchronous-typescript)

`2-9:` [Conditional type](#2-9-conditional-types)

`2-10:` [Mapped types](#2-10-mapped-types)

`2-11:` [Utility types](#2-11-utility-types)

---

### `2-1` Types assertion type narrowing <br>

2-1 [First Example](#2-1-first-example)

2-1 [Second Example](#2-1-second-example)

2-1 [Third Example](#2-1-third-example)

`type assertion`: যদি আমি developer হিসাবে typescript থেকে type বেশি বুঝলে বা বেশি ভালো type declare করতে পারলে তখন জোর করে type বলে দেয়াকে type assertion বলে ।

#### `2-1 First Example`

```
  let anything: any;
  anything = "type assertion";
  anything = 222;
  anything as number;
```

- উপরের উদাহরণে আমরা দেখতে পাচ্ছি কে any type হিসাবে declare করা হয়েছে
  ```
  let anything: anything
  ```
- পরে দুইবার type change করা হয়েছে

```
  anything = "type assertion";
  anything = 222;

```

- এবং সর্বশেষ type number ছিল তাই একে আমরা বলে দিতে পারি তুমি nymber type হবা

```
 anything as number;

```

- কারন শুরুতে type ছিল anything তাই ভিন্ন ভিন্ন value setting এ বাধা দিচ্ছিল না ।
- কিন্তু যেহেতু আমরা number value সেট করেছি তাই আমরা বলে দিতে পারি তুাম number type হবা

#### `2-1 Second Example`

```
const kgToGm = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
        const convertedValue = parseFloat(value);
        return `The converted value is ${convertedValue * 1000}`;
    }
        if (typeof value === "number") {
        return value \* 1000;
    }
};

const result1 = kgToGm(1000) as number;
const result2 = kgToGm("1000") as string;

type TCustomError = {
message: string;
};
```

- উপরের একটি function আছে kgToGm, যেটা input হিসাবে string | number নিবে এবং output হিসাবে ‍string | number | undefined , return করবে ।
- এখানে string input দিলে string output আসবে
- এখানে number input দিলে number output আসবে
- result1 এ আমরা number input দিয়েছি এবং developer হিসাবে আমরা জানি number output আসবে তাই একে আমরা একে type assertion করে number type declare করে দিয়েছি

```
const result1 = kgToGm(1000) as number;
```

- result2 এ আমরা string input দিয়েছি এবং developer হিসাবে আমরা জানি string output আসবে তাই একে আমরা একে type assertion করে string type declare করে দিয়েছি

```
const result2 = kgToGm("1000") as string;
```

#### `2-1 Third Example`

```
type TCustomError = {
    message: string;
  };

try {
} catch (error) {
console.log((error as TCustomError).message);
}


```

- try catch block এ আমরা error message কে ধরার জন্য একটি type লিখেছি

```
type TCustomError = {
    message: string;
  };
```

- এবং catch block এর ‍একে type assertion করা হওয়ছে

---

### `2-2` Interface Type vs Interface

- সকল Primitive data type এর ক্ষেত্রে type alias ব্যবহার করতে পারব

```
type rollNumber = number
```

- object data এর ক্ষেত্রে type alias এবং interface দুই টাই ব্যাবহার করতে পারব

```
 // type alias
  type TUser1 = {
    name: string;
    age: number;
  };

// interface
  interface IUser {
    name: string;
    age: number;
  }

  const user1: IUser = {
    name: "Abul",
    age: 2,
  };
```

- কিন্তু কোন primitive data এর ক্ষেত্রে inteface ব্যাবহার করা যাবেনা ।
- কেননা interface class ও object এর মত আচরণ করে একে extend করা যায়

- type এর extend করতে হলে intersection করতে হয়

```
// টাইপকে extend করার পদ্ধতি

  type TUser1 = {
    name: string;
    age: number;
  };
  type role = string

  // intersection of two type
  type TUserWithRole1 = TUser1 & role;

  const user2: TUserWithRole1 = {
    name: "Dabul",
    age: 33,
    role: "user",
  };

```

- Similarly, interfece কেও extend করা যায় extend keyword এর মাধ্যমে

```
  interface IUser {
    name: string;
    age: number;
  }

  interface IUserWithRole extends IUser {
    role: string;
  }

  const userWithRole: IUserWithRole = {
    name: "Abul",
    age: 2,
    role: "manager",
  };
```

- চাইলে type কেও extend করে interface বানানো যায়

```
  type employee = {
    name: string;
    age: number;
  };

  interface EmployeeWithPosition extends employee {
    position: string;
  }

  const employee1: EmployeeWithPosition = {
    name: "Hamid",
    age: 20,
    position: "worker",
  };

```

- কিভাবে Array কে interface এর মাধ্যমে declare করা যায়
- js ---> object, array-> object , function -> object

```
  type Roll1 = number[];

  const rollNumber1: Roll1 = [1, 2, 3];

  //  সেম interface use করে

    interface Roll2 {
    [index: number]: number;
  }

  const rollNumber2: Roll2 = [1, 2, 3];

```

- এখানে বোঝানো হয়েছে array এর index এর type number ও value এর type number

```interface Roll2 {
    [index: number]: number;
  }

```

- `Function ` কে interface এর মাধ্যমে লেখা

```

  type Add = (num1: number, num2: number) => number;

  const add: Add = (num1, num2) => {
    return num1 + num2;
  };
  // interface এর মাধ্যমে function declare করা
  interface IAdd {
    (num1: number, number2: number): number;
  }

  const add2: IAdd = (num1, num2) => num1 + num2;

```

- `Recmomendation`
  - ‍Array ও Function এর জন্য type alias ব্যবহার করা
  - Object এর জন্য চাইলে type alias অথবা interface ব্যাবহার করা

---

### `2-3` Introduction to generics

- Generics শব্দের অর্থ হল generalized করে ফেলা ।
- আমরা যদি কোন type কে generalized করতে পারি তাহলে তাকে generics বলে
- generics এ আমরা dynamic ভাবে type তৈরি করতে পারি ও reuse করতে পারি

- ধরুন, আমাদের একটি জেনেরিক ফাংশন থাকলে যেখানে আমরা একটি প্যারামিটার হিসাবে একটি ডাটা টাইপ নেব। এই ডাটা টাইপটি যেকোনো ধরনের হতে পারে। ফাংশনটি এই ডাটা টাইপের উপর ভিত্তি করে কাজ করবে। যেমন, আমরা একটি জেনেরিক ফাংশন তৈরি করতে পারি যা দুটি নাম্বার বা স্ট্রিং যোগ করতে পারে।

```
function add<T>(x: T, y: T): T {
  return x + y;
}

```

- এখানে T হল জেনেরিক ডাটা টাইপ। যখন আমরা এই ফাংশনটি কল করব, তখন টাইপ ইনফারেন্সের মাধ্যমে টাইপস্ক্রিপ্ট স্বয়ংক্রিয়ভাবে ডাটা টাইপ নির্ধারণ করবে।

- এছাড়াও, আমরা জেনেরিক ক্লাস বা ইন্টারফেস ব্যবহার করে একই ধরনের ফাংশনালিটি প্রদান করতে পারি যা আমরা নির্দিষ্ট ডাটা টাইপ বা অবজেক্টের উপর নির্ভর করব।

- এই মত টাইপ প্যারামিটার ব্যবহার করে, আমরা কোডটিকে জেনেরিক করে সাধারণভাবে প্যারামিটারের টাইপ নির্ধারণ না করেই গুনগুণ কাজ করতে পারি।

-

```

  type GenericArray<T> = Array<T>;

  // সাধারণ নিয়ম
  const rollNumbers: number[] = [3, 4, 5, 5];
  // Array method দিয়ে
  const rollNumbers2: Array<number> = [3, 4, 5, 5];
  // GenericArray type দিয়ে
  const rollNumbers3: GenericArray<number> = [3, 4, 5, 5];

  const students: string[] = ["abul", "dabul", "kabul", "sabul"];
  const students2: Array<string> = ["abul", "dabul", "kabul", "sabul"];
  const students3: GenericArray<string> = ["abul", "dabul", "kabul", "sabul"];

  const boolArray: boolean[] = [true, false, true, true, false];
  const boolArray2: Array<boolean> = [true, false, true, true, false];
  const boolArray3: GenericArray<boolean> = [true, false, true, true, false];

  /*
   GenericArray type কে আমরা Array of object হিসাবে ব্যাবহার করতে পারি ।
  */

  const user: GenericArray<{
    name: string;
    age: number;
  }> = [
    {
      name: "Abul",
      age: 100,
    },
    {
      name: "Dabul",
      age: 200,
    },
  ];

```

- উপরের `type GenericArray<T> = Array<T>` একটি Generic type
- এটা ব্যাবহার করে আমরা বিভিন্ন বিভন্ন ভাবে array তৈরি করতে পারি

- Generic Tuple

```

  // প্রথমটা number, দ্বিতীয়টা object
  const userWithId: GenericTuple<
    number,
    {
      name: string;
      email: string;
    }
  > = [1234, { name: "abul", email: "abul@mail.com" }];

  // another way
  // type declare করেও করতে পারি
   type Person = {
    name: string;
    email: string;
  };
  const userWithId2: GenericTuple<number, Person> = [
    1234,
    { name: "abul", email: "abul@mail.com" },
  ];

```

- Interface দিয়েও সম্ভব

```
interface IPerson {
    name: string;
    email: string;
  }

  const userWithId3: GenericTuple<number, IPerson> = [
    20,
    {
      name: "Abul",
      email: "abul@mail.com",
    },
  ];

```

---

### `2-4` Generic with interface

---

### `2-5` Function with generics

---

### `2-6` Constraints in typescript

---

### `2-7` Constraint using key of

---

### `2-8` Asynchronous typescript

---

### `2-9` Conditional types

---

### `2-10` Mapped types

---

### `2-11` Utility types
