"use strict";
{
    const newDeveloper = "juniorDeveloper";
    const user1 = {
        name: "Hasan",
        email: "hasan@mail.com",
        genger: "male",
        isAdmin: true,
    };
    /** Intersection type */
}
// combining two types
{
    /** TFrontEndDeveloper এর জন্য ২ টা উদাহরণ    */
    let frontEndDev1 = "fakibaDeveloper";
    let frontEndDev2 = "juniorDeveloper";
    /** TFullStackDeveloper এর জন্য ২ টা উদাহরণ    */
    let fullStackDev1 = "frontEndDeveloper";
    let fullStackDev2 = "expertDeveloper";
    /**
     * কিন্তু Developer type তৈরি করা হয়েছে TFrontEndDeveloper |TFullStackDeveloper
     * তাই Developer টাইপ দিয়ে ৪ টি আলাদা আলাদা ভেরিয়েবল তৈরি করা যাবে ।
     */
    let dev1 = "fakibaDeveloper";
    let dev2 = "juniorDeveloper";
    let dev3 = "frontEndDeveloper";
    let dev4 = "expertDeveloper";
}
{
    const fullStackDeveloper = {
        skills: ["HTML", "CSS", "EXPRESS"],
        designation1: "FrontEndDeveloper",
        designation2: "BackEndDeveloper",
    };
}
