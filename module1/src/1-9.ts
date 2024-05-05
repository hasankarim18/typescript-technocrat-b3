{
  // type alias in type script

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

  // type alias ends
}
