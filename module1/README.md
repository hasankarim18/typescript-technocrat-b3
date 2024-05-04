#### [1.7 Spread And Rest Operator](#spread-and-rest-operator)

#### [1.8 Destructuring of Objects and Array](#destructuring-of-objects-and-array)

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
