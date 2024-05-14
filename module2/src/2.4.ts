{
  console.log("Generic with interface");
  // creating generics with interface

  // smaratWatch কে generics এর মাধ্যমে type তৈরি করতে চাই
  //
  interface Developer<T> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
  }

  interface SmartWatch {
    compayName: string;
    modelYear: number;
    price: number;
  }

  interface UltraSmartWatch extends SmartWatch {
    heartTrack: boolean;
    sleepTrack: boolean;
  }

  const poorDeveloper: Developer<boolean> = {
    name: "poor man",
    computer: {
      brand: "Asus",
      model: "Normal",
      releaseYear: 2020,
    },
    smartWatch: false,
  };

  const richDeveloper: Developer<SmartWatch> = {
    name: "Rich man",
    computer: {
      brand: "Asus",
      model: "Gaming",
      releaseYear: 2023,
    },
    smartWatch: {
      compayName: "Apple",
      modelYear: 2024,
      price: 12000,
    },
  };

  const urtraRichDeveloper: Developer<UltraSmartWatch> = {
    name: "Cool Guy",
    computer: {
      brand: "Apple",
      model: "unknown",
      releaseYear: 2023,
    },
    smartWatch: {
      compayName: "Apple",
      modelYear: 2024,
      price: 120000,
      sleepTrack: true,
      heartTrack: true,
    },
  };

  /*
    - Developer interface এর শেষে  <T> দেয়া হয়েছে, কারন এটই genreics এর নিয়ম এই <T> এর মাধ্যমে dynamically type receive করবে , এবং সেটা smartWatch এ ব্যাবহৃত হবে      

  */
  // default vaue of type
  interface Developer2<T, U = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: U;
  }

  interface DeveloperWithBike<T, U> extends Developer<T> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: U;
  }

  type Bike = {
    name: string;
    compay: string;
    cc: number;
  };

  const coolDeveloper: DeveloperWithBike<UltraSmartWatch, Bike> = {
    name: "Cool Guy",
    computer: {
      brand: "Apple",
      model: "unknown",
      releaseYear: 2023,
    },
    smartWatch: {
      compayName: "Apple",
      modelYear: 2024,
      price: 120000,
      sleepTrack: true,
      heartTrack: true,
    },
    bike: {
      name: "R15",
      compay: "Hero",
      cc: 165,
    },
  };
}

{
  // extending Generic Interfaces
  interface Developer<T> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
  }

  // উপরের Developer interfce কে আমরা extend করতে পারি এবং আর একটা dynamic type যোগ করতে পারি ।
  interface DeveloperWithBike<T, U> extends Developer<T> {
    bike?: U;
  }
}
