// Reference type
// Object
{
  const user: {
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
}
