{
  console.log("type assertion");
  /** type assertion */
  /*
   আমি developer হিসাবে typescript থেকে type বেশি
  বুঝলে বা বেশি ভালো type declare করতে পারলে   তাকে type assertionবলে ।
  */

  let anything: any;
  anything = "type assertion";
  anything = 222;
  anything as number;

  const kgToGm = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value);
      return `The converted value is ${convertedValue * 1000}`;
    }
    if (typeof value === "number") {
      return value * 1000;
    }
  };

  const result1 = kgToGm(1000) as number;
  const result2 = kgToGm("1000") as string;

  type TCustomError = {
    message: string;
  };

  try {
  } catch (error) {
    console.log((error as TCustomError).message);
  }

  //
}
