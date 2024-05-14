"use strict";
{
    console.log("function generices");
    // function with genrics
    // normal function
    const createArray = (param) => {
        return [param];
    };
    const result1 = createArray("Bangladesh");
    console.log(result1);
    // genric function
    const createArrayWithGeneric = (param) => {
        return [param];
    };
    // string type এর array return করতেছে
    const resGeneric2 = createArrayWithGeneric("Dhaka");
    console.log(resGeneric2);
    const resGeneric3 = createArrayWithGeneric({ name: "Abul", age: 20 });
    console.log(resGeneric3);
    // end
}
{
    // tuple generic function
    const createArrayWithTuple = (param1, param2) => {
        return [param1, param2];
    };
    const [a, b] = createArrayWithTuple("dhaka", "khulna");
    console.log({ a }, { b });
    const user1 = {
        id: 123,
        name: "karim",
    };
    const countryOfUser1 = {
        country: "Bangladesh",
        capital: "Dhaka",
    };
    const user1FullInfo = createArrayWithTuple(user1, countryOfUser1);
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
    const student1 = {
        name: "Dabul",
        id: 123,
        phone: false,
        laptop: true,
        email: "babul@mail.com",
    };
    const addCourseToStudent = (student) => {
        const course = "Next Level Web Development";
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1WithCourse = addCourseToStudent(student1);
    console.log({ student1WithCourse });
}
{
    const student1 = {
        name: "Dabul",
        id: 123,
        phone: false,
        laptop: true,
        email: "babul@mail.com",
    };
    //
    const addAdditionalCourse = (student, courses) => {
        const defaultCourse = "Next Level";
        if (typeof courses === "string") {
            return Object.assign(Object.assign({}, student), { coursesList: [courses, defaultCourse] });
        }
        else if (Array.isArray(courses) &&
            courses.every((item) => typeof item === "string")) {
            return Object.assign(Object.assign({}, student), { coursesList: [...courses, defaultCourse] });
        }
        else {
            return "Courses must be string or array of string";
        }
    };
    const coursesList = ["physics", "chemistry"];
    const user1 = addAdditionalCourse(student1, coursesList);
    const student2 = {
        name: "Student 2",
        age: 100,
    };
    const user2 = addAdditionalCourse(student2, "biology");
    console.log(user1);
    console.log(user2);
}
