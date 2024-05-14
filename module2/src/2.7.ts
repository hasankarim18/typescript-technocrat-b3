{
  // generic Constraint using key of
  // - typescript এ একটা keyof operator আছে সেটা দিয়ে আমরা generic তৈরি করতে পারি ।

  console.log("generic constraints by key of");

  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  // নতুন একটা type তৈরি করতে হবে কিন্তু type টা হবে একটা union type যেখানে string literal হিসাবে ব্যাবহার করা হবে উপরের
  // - bike | car | ship ; অর্থাৎ কোন type এর key গুলোকে আমরা string literal হিসাবে ব্যাবহার করব

  // য়দি manually কজটা করি তাহলে

  type Owener = "bike" | "car" | "ship"; // manually এরকম হবে

  // same জিনিসটা আমরা যদি কোন operator দিয়ে করতে চাই তাহলে keyof operator ব্যাবহার করব

  type Owener2 = keyof Vehicle;

  // - n.b. type Owener1 ও Owener2 একই কাজ করবে এবং তারা exactly same । keyof operator ব্যাবহার করে আমরা shortcut করেছি ।

  const bikeOwener: Owener = "bike";
  const carOwener: Owener2 = "car";

  // একটা type এর key গুলো নিয়ে ‍ string literal এর নতুন union type তৈরি করা

  // এমন একটা function তৈরি করব যার ভিতরে আমরা একটা object ও একটা key পাঠাব, তাহলে key এর value return হিসাবে পাব

  type User = {
    name: string;
    age: number;
    address: string;
  };

  const user: User = {
    name: "Mr. X",
    age: 20,
    address: "Dhaka",
  };

  const lexus = {
    model: "G, 2024",
    brand: "Lexux",
    year: 2024,
  };

  const getPropertyValue = <T, Q extends keyof T>(obj: T, key: Q) => {
    return obj[key];
  };

  const result = getPropertyValue(user, "name"); // "Mr. X",

  const car = getPropertyValue(lexus, "model"); //  "G, 2024"

  //
}
