"use strict";
{
    console.log("constraints");
    // constraints মানে হল force করা । কোন কিছুকে force করা
    // add course to student
    // আমরা এখন একটি জেনারেল generic function লিখলাম
    const addCourseToStudent = (student) => {
        const course = "Next Level Web Development";
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCourseToStudent({
        name: "Abul",
        email: "abul@mail.com",
        devType: "NLWB",
    });
    const student2 = addCourseToStudent({
        name: "Dabul",
        phone: 123456,
        smaartWatch: true,
    });
    const student3 = addCourseToStudent({ emni: "user" });
    console.log(student1);
    console.log(student2);
    console.log(student3);
    // - উপরের function এ সমস্যা আছে । আমরা ইচ্ছা মত object parameter হিসাবে আমরা দিতে পারি
    // যেহেতু আমরা student object তৈরি করতেছি তাই student3 দেখে বোঝার উপায় নাই আমরা কি তৈরি  করতেছি । এবং কোন student এর নির্দিষ্ঠ structure নাই ।
    // এখানে আমরা মনের খুশি মত parameter পাঠাতে পারতেছি ্
    //
}
{
    const addCourseToStudent = (student) => {
        const course = "Next Level Web Development";
        return Object.assign(Object.assign({}, student), { course });
    };
    // এই extends করাটাকেই constraints বলে কারন এর মাধ্যমে বলে দেয়া হল dynamic type T,Student type কে extend করল অর্থাৎ Student type এর ৩ রকম data অবশ্যই থাকতে হবে এবং extra data যোগ করা যাবে
    const student1 = addCourseToStudent({
        name: "Studnet1",
        id: 123,
        email: "st1@mail.com",
    });
    // অথবা লেখার অন্য উপায় নিচের ক্ষেত্রে extra Feature যোগ করা যাবেনা
    // কিন্তু উপরের ক্ষেত্রে extra feature যোগ করা যাবে
    // কেননা নিচের function এ function type ঠিককরে দেয়া হয়েছে ।
    const student2 = addCourseToStudent({
        name: "Studnet1",
        id: 123,
        email: "st1@mail.com",
    });
    // Extra feature
    const student3 = addCourseToStudent({
        name: "Studnet1",
        id: 123,
        email: "st1@mail.com",
        smaartWatch: true,
    });
}
