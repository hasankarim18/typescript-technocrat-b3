{
  console.log("Introduction to generics");

  type GenericArray<T> = Array<T>;

  const rollNumbers: number[] = [3, 4, 5, 5];
  const rollNumbers2: Array<number> = [3, 4, 5, 5];
  const rollNumbers3: GenericArray<number> = [3, 4, 5, 5];

  const students: string[] = ["abul", "dabul", "kabul", "sabul"];
  const students2: Array<string> = ["abul", "dabul", "kabul", "sabul"];
  const students3: GenericArray<string> = ["abul", "dabul", "kabul", "sabul"];

  const boolArray: boolean[] = [true, false, true, true, false];
  const boolArray2: Array<boolean> = [true, false, true, true, false];
  const boolArray3: GenericArray<boolean> = [true, false, true, true, false];

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

  const add = (x: number, y: number) => x + y;

  const add2 = <T, U>(x: T, y: U): number | string => {
    if (typeof x === "string" && typeof y === "string") {
      return `${x} and ${y}`;
    } else if (typeof x === "number" && typeof y === "number") {
      return x + y;
    }
    return `${x} and ${y}`;
  };

  console.log(add2(3, 4));
  console.log(add2("abul", 2));
  console.log(add2("abul", true));

  /** Generic tuple  */

  type GenericTuple<T, U> = [T, U];

  const manush: GenericTuple<string, string> = ["Mr. x", "Mrs. Y"];

  //const GenericUserWithId<T, U> = [T,U]

  type Person = {
    name: string;
    email: string;
  };

  const userWithId: GenericTuple<
    number,
    {
      name: string;
      email: string;
    }
  > = [1234, { name: "abul", email: "abul@mail.com" }];

  // another way
  const userWithId2: GenericTuple<number, Person> = [
    1234,
    { name: "abul", email: "abul@mail.com" },
  ];

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

  // 2.3 end introduction to generics
}
