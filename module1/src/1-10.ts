{
  /** Union type */
  // we are using string literal type
  type FrontEndDeveloper = "fakibaDeveloper" | "juniorDeveloper";

  const newDeveloper: FrontEndDeveloper = "juniorDeveloper";

  type TUser = {
    name: string;
    email: string;
    genger: "male" | "female";
    isAdmin: true | false;
  };

  const user1: TUser = {
    name: "Hasan",
    email: "hasan@mail.com",
    genger: "male",
    isAdmin: true,
  };

  /** Intersection type */
}

// combining two types
{
  type TFrontEndDeveloper = "fakibaDeveloper" | "juniorDeveloper";
  type TFullStackDeveloper = "frontEndDeveloper" | "expertDeveloper";
  /** এতটা টইপ এর সাথে আর একটা টাইপ  Union করতে পারি  */
  type Developer = TFrontEndDeveloper | TFullStackDeveloper;
  /** TFrontEndDeveloper এর জন্য ২ টা উদাহরণ    */
  let frontEndDev1: TFrontEndDeveloper = "fakibaDeveloper";
  let frontEndDev2: TFrontEndDeveloper = "juniorDeveloper";

  /** TFullStackDeveloper এর জন্য ২ টা উদাহরণ    */
  let fullStackDev1: TFullStackDeveloper = "frontEndDeveloper";
  let fullStackDev2: TFullStackDeveloper = "expertDeveloper";

  /**
   * কিন্তু Developer type তৈরি করা হয়েছে TFrontEndDeveloper |TFullStackDeveloper
   * তাই Developer টাইপ দিয়ে ৪ টি আলাদা আলাদা ভেরিয়েবল তৈরি করা যাবে ।
   */
  let dev1: Developer = "fakibaDeveloper";
  let dev2: Developer = "juniorDeveloper";
  let dev3: Developer = "frontEndDeveloper";
  let dev4: Developer = "expertDeveloper";
}

{
  // intersection

  type TFrontEndDeveloper = {
    skills: string[];
    designation1: "FrontEndDeveloper";
  };

  type TBackEndDeveloper = {
    skills: string[];
    designation2: "BackEndDeveloper";
  };

  type TFullStackDeveloper = TFrontEndDeveloper & TBackEndDeveloper;

  const fullStackDeveloper: TFullStackDeveloper = {
    skills: ["HTML", "CSS", "EXPRESS"],
    designation1: "FrontEndDeveloper",
    designation2: "BackEndDeveloper",
  };
}
