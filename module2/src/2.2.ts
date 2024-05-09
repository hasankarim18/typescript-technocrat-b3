{
  console.log("Interface, type vs interface");
  // Interface -- type alias এর জাত ভাই

  // interface

  type TUser1 = {
    name: string;
    age: number;
  };

  type TUserWithRole1 = TUser1 & { role: string };

  const user2: TUserWithRole1 = {
    name: "Dabul",
    age: 33,
    role: "user",
  };

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

  /*
- কিভাবে Array কে interface এর মাধ্যমে declare করা যায়
- js ---> object, array-> object , function -> object
*/

  type Roll1 = number[];

  const rollNumber1: Roll1 = [1, 2, 3];

  // Index হিসাবে
  interface Roll2 {
    [index: number]: number;
  }

  const rollNumber2: Roll2 = [1, 2, 3];

  type Add = (num1: number, num2: number) => number;

  const add: Add = (num1, num2) => {
    return num1 + num2;
  };

  interface IAdd {
    (num1: number, number2: number): number;
  }

  const add2: IAdd = (num1, num2) => num1 + num2;

  /** end here */
}
