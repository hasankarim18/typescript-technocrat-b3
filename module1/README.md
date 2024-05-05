#### [1.7 Spread And Rest Operator](#spread-and-rest-operator)

#### [1.8 Destructuring of Objects and Array](#destructuring-of-objects-and-array)

#### [1.9 Type Alias](#type-alias)

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
