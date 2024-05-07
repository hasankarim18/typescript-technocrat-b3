{
  console.log("1.12");
  // Nullable type // ওকান একটি ভেরিয়েবলের  টাইপ যদিত নাল হয় তাকে Nullable type বলে

  const searchName = (value: string | null) => {
    if (value) {
      console.log("Searching");
    } else {
      console.log("There is nothing to serach...");
    }
  };

  searchName("Hasan"); // searching
  // ব্যাপারটা এমন হতে পারে যে আমি কোন ভ্যালু পাঠাবোনা কিন্তু তাতে সার্চ এর ক্ষেত্রে সকল ভ্যালু দেখাবে
  // searchName এর প্যারামিপার এর ভ্যালু string অথবা null হতে পারে
  searchName(null); // nullable type

  // unknown type বর্তমানে টাইপ জানি না কিন্তু ভবিষ্যতে জানতে পারব
  // এমনও হতেপারে রান টাইমে গিয়ে কিছু সময় পরে টাইপ বুজতে পারব ।
  // typeof operator

  const getSpeedInMeterPerSecond = (value: unknown) => {
    if (typeof value === "number") {
      const convertedSpeed = ((value * 1000) / 3600).toFixed(2);
      //   const convertedSpeed = speed.toFixed(2);
      console.log(`The speed is ${convertedSpeed} ms^-1`);
    } else if (typeof value === "string") {
      const valueInStrigToArray = value.split(" ");
      const [valueInString, unit] = valueInStrigToArray;
      const speedInNumber = parseFloat(valueInString);

      const convertedSpeed = ((speedInNumber * 1000) / 3600).toFixed(2);

      console.log(`The speed is ${convertedSpeed} ms^-1`);
    } else {
      console.log("Value must be string('1000 km^-1') format or number");
    }
  };

  getSpeedInMeterPerSecond("1000 km^-1");

  /** Never type
   *  এমন ফাংশান কোনদিন কিছু রিটার্ন করবেনা
   *
   */
  const throwError = (msg: string): never => {
    throw new Error(msg);
  };

  throwError("muskill se error ho geya");
}
