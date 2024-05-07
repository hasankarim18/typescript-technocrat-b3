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

---

### `2-3` Introduction to generics

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
