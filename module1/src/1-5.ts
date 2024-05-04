// Reference type
// Object

export const user: {
  course: "P Hero";
  firstName: string;
  middleName?: string; // optional type
  readonly lastName: string;
  isMarried: boolean;
} = {
  course: "P Hero", // literal -->  type
  firstName: "Hasan",
  middleName: "Mahbub ul",
  lastName: "Karim",
  isMarried: true,
};

user.lastName = "ul Karim";

console.log(user);
