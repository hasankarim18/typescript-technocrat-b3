{
  console.log("conditional types");
  // conditional type
  // টাইপের মানটা যদি অন্য একটি condition এর উপর নির্ভর করে তাহলে তাকে conditional type বলে।

  type a1 = null;
  type b1 = undefined;

  type x = a1 extends null ? true : false; // conditional type
  // - যদি a1 null কে extends করতে পারে তাহলে তা  true  হবে
  // - আর যদি ‍a1 কে number বা অন্য type করে দেয়া হয় তহলে তা false হবে

  // nestend conditional type

  //
}

// null, null কে extend করতে পারে
// undefined, undefined কে extend করতে পারে
// কিন্তু
// ‍string, null কে extend করতে পারেনা

{
  type a1 = number;
  type b1 = undefined;

  type y = a1 extends null ? true : b1 extends undefined ? undefined : any;

  /*
     - `y` এর type কি হবে ? 
     - - ‍a1 কি null কে extends --> না করে নাই // 
     - -  b1 কি undefined কে extends করেছে --> করেছে 
     - - তাহলে y এর type হবে undefined
  */

  type Sheikh = {
    bike: string;
    car: string;
    ship: string;
    plane: string;
  };

  // key of operator Sheikh

  // car আছে কিনা | bike আছে কিনা | ship আছে কিনা | Tracktor আছে কিনা
  type CheckVehicle<T> = T extends keyof Sheikh ? true : false;

  type HasTracktor = CheckVehicle<"ship">; // true
  type HasPlane = CheckVehicle<"car">; // false

  //
}
