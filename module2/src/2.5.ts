{
  console.log("function generices");

  // function with genrics
  // normal function
  const createArray = (param: string): string[] => {
    return [param];
  };

  const result1 = createArray("Bangladesh");

  console.log(result1);

  // genric function
  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  // string type এর array return করতেছে
  const resGeneric2 = createArrayWithGeneric<string>("Dhaka");
  console.log(resGeneric2);

  // param হিসাবে object দেয়া হয়েছে তাই return হিসাবে [{object}] return কেরবে
  type user = {
    name: string;
    age: number;
  };
  const resGeneric3 = createArrayWithGeneric<user>({ name: "Abul", age: 20 });

  console.log(resGeneric3);

  // end
}

{
  // tuple generic function

  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const [a, b] = createArrayWithTuple<string, string>("dhaka", "khulna");
  console.log({ a }, { b });

  // আমরা object of পাঠাতে পারি এবং
  type User = {
    id: number;
    name: string;
  };
  type Country = {
    country: string;
    capital: string;
  };
  const user1: User = {
    id: 123,
    name: "karim",
  };
  const countryOfUser1: Country = {
    country: "Bangladesh",
    capital: "Dhaka",
  };

  const user1FullInfo = createArrayWithTuple<User, Country>(
    user1,
    countryOfUser1
  );

  console.log(user1FullInfo);
  /*
  [
    { id: 123, name: 'karim' },
    { country: 'Bangladesh', capital: 'Dhaka' }
  ]
  */
  console.log({ user1FullInfo });
  /*  
  user1FullInfo: [
    { id: 123, name: 'karim' },
    { country: 'Bangladesh', capital: 'Dhaka' }
  ]

  */
}

{
  // add course to student
  type Student = {
    name: string;
    id: number;
    phone: boolean;
    laptop?: boolean;
    email?: string;
  };

  const student1: Student = {
    name: "Dabul",
    id: 123,
    phone: false,
    laptop: true,
    email: "babul@mail.com",
  };

  const addCourseToStudent = <T>(student: T): T & { course: string } => {
    const course = "Next Level Web Development";
    return {
      ...student,
      course,
    };
  };

  const student1WithCourse = addCourseToStudent<Student>(student1);

  console.log({ student1WithCourse });
}

{
  type Student = {
    name: string;
    id: number;
    phone: boolean;
    laptop?: boolean;
    email?: string;
  };

  const student1: Student = {
    name: "Dabul",
    id: 123,
    phone: false,
    laptop: true,
    email: "babul@mail.com",
  };
  //
  const addAdditionalCourse = <T, Q>(student: T, courses: Q) => {
    const defaultCourse = "Next Level";

    if (typeof courses === "string") {
      return {
        ...student,
        coursesList: [courses, defaultCourse],
      };
    } else if (
      Array.isArray(courses) &&
      courses.every((item) => typeof item === "string")
    ) {
      return {
        ...student,
        coursesList: [...courses, defaultCourse],
      };
    } else {
      return "Courses must be string or array of string";
    }
  };

  const coursesList: string[] = ["physics", "chemistry"];

  const user1 = addAdditionalCourse<Student, string[]>(student1, coursesList);

  interface Student2 {
    name: string;
    age: number;
  }

  const student2 = {
    name: "Student 2",
    age: 100,
  };

  const user2 = addAdditionalCourse<Student2, string>(student2, "biology");
  console.log(user1);
  console.log(user2);
}
