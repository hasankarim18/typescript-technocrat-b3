`3-0:` [Introduction to OOP](#3-0-introduction-to-oop)

`3-1:` [Class and object](#3-1-class-and-object)

`3-2:` [Inheritance in OOP](#3-2-inheritance-in-oop)

`3-3:` [Type guard using typeof and in](#3-3-type-guard-using-typeof-and-in)

`3-4:` [Type guard instance of](#3-4-type-guard-using-instance-of)

`3-5:` [Access modifiers](#3-5-access-modifiers)

`3-6:` [Getter and setter](#3-6-getter-and-setter)

`3-7:` [Statics in OOP](#3-7-statics-in-oop)

`3-8:` [Polymorphism](#3-8-polymorphism)

`3-9:` [Abstraction in OOP](#3-9-abstraction-in-oop)

`3-10:` [Encapsulation in OOP](#3-10-encapsulation-in-oop)

---

## 3-0 Introduction to OOP

- A programming paradigm that organizes and models software.
- Software কে organise করতে পারি এবং বিভিন্ন ছোট ছোট module এ ভাগ করে ফেলতে পারি ।
- What is a `paradigm`
  - The style of writting and organising code
  - অর্থাৎ code লেখার guide অথবা style
  - Code maintain করার জন্য ব্যাবহৃত হয়
- `Programming` এ কত ধরণের paradigm আছে

  - `Procedural Programming`

    - Procedural programming is a coding approach that organizes a computer program into a set of stuructured procedures or functions. These procedures consist of a series of well-defined steps or insturctions that are executed sequentially. However, it may lack the flexibility and reusability of more advanced programming pradigms.

  - `Functional Programming`

    - Functional programming is like using a set of building blocks that are like mathmatical fucntions. This helps in making your code easier to understand and less likely to have.

  - `Declarative Programming`
    - Declarative programming is an approach to writting computer programs that focuses on describing the desired outcome or result, rather than explicitly specifying the step-by-step instructions to achieve that outcome. In declarative programming, you define what you want to accomplish, and the underlying system or framework figures out how to achieve
  - `Object Oriendted Programming`
    - Object Orientd Programming (oop) is a programming paradigm that organises code around objects, which are instances of classes defining data and behavior. In OOP, software is designed by modeling real-world entities as bojects, each having attributed (data) and methods (functions) that operate on the data
      - `data called atribuies`
      - `function is called methods`
      - data ও method একসাথে couple অবস্থায় রাকতে পারি
  - `Event Driven Programming`
    - Html এর ভিতরে কোন event fire হলে তার against এ কোন কাজ করতে পারি
    - Node application এও আমরা এটা করতে পারি ।

### Funtion vs OOP

- একটি programe কে আমরা যেরকম functional way তে করতে পারি সেরকম OOP ব্যাবহার করেও করতে পারি ।
- কোনটা ব্যাবহার হবে নির্ভর করে তোমার code টাকে তুমি কিভাবে orgainise করতে চাও তার উপার।

- `To become versatile you need to learn both`

### <u> `4 Building blocks of OOP`</u>

1. `Inheritance`
2. `Polymorphism`
3. `Abstruction`
4. `Encapsulation`

## 3-1 Class and object

- Javascript এর মত clss declare করব তবে property type গুলো বলে দিতে হবে
- Class এর কাজ হল Object তৈরি করা
- Object তৈরির blueprint হল class
- Class লিখার সময় অবশ্যই constructor দিয়ে value গুলো দিতে হবে

```
   class Animal {
        animalName: string;
        animalSpecies: string;
        animalSound: string;
    constructor(name: string, species: string, sound: string) {
      this.animalName = name;
      this.animalSpecies = species;
      this.animalSound = sound;
    }

    makeSound() {
      console.log(`the ${this.animalName} making sound: ${this.animalSound}`);
    }

  }

```

- Animal class এ `animalName: string`, `animalSpecies: string`,
  `animalSound: string` হল variable

- constructor function লাগবে হল এমন একটা function যা parameter receive করতে ও class এর variable সেই parameter set করতে কাজে লাগে ।
- function এ যেমন parameter pass করা যায় তেমনি constructor function parameter accept করে ।

- এখানে `this` দ্বারা `Class Animal`কে বুঝাচ্ছে এবং এর সাথে `this.animalName` দ্বারা `Animal` class এ `animalName` নামের `variable` কে নির্দেশ করে যা value হিসাবে incomming parameter থেকে যে parameter set করা হয় সেটাই তার ভ্যালু হয় ।

- Class এ data save করলে তাকে attributes বলে
- Class এ function save করলে তাকে মেথড `method` বলে
- function হিসাবে `normal function` ব্যবহার কেরতে হয়, নাহলে `this` কাজ করবেনা এবং class এর কোন value access করা যাবেনা । কেনান আমরা জানি arrow function এ `this` কাজ করোনা

- Class থেকে object তৈরি করতে `new` keyword ব্যাবহার করতে হয়

```
 const dog = new Animal("German Shephard", "dog", "bark");
 const cat = new Animal("Persian", "cat", "Meao");
```

```
// dog একটা Animal class এর instance অর্থাৎ object
  // যা দেখতে নিচের object এর মত
  /*
    const dog = {
      name:"German Shephard",
      species:"dog",
      sound:"bark"

    }
  */
```

- Animal, class থেকে দুইটি object `dog and cat` তৈরি করা হয়েছে ।
- Class থেকে তৈরি করা object কে instance বলে
- `Animal` থেকে তৈরি object `dog` একটা instance `cat` আর একটা instance

### public keyword

- Class এর default property গুলো publicly access করা যায় তাই এদের সামনে আমরা `public keyword` লিখতে পারি ।

```
  class Animal {
    public animalName: string;
    public animalSpecies: string;
    public animalSound: string;

    constructor(name: string, species: string, sound: string) {
      this.animalName = name;
      this.animalSpecies = species;
      this.animalSound = sound;
    }

    makeSound() {
      console.log(`the ${this.animalName} making sound: ${this.animalSound}`);
      return;
    }
  }

  const dog = new Animal("German Shephard", "dog", "bark");

  const cat = new Animal("Persian", "cat", "Meaw");

  // cat.makeSound();
  //  dog.makeSound();
  console.log(dog.makeSound());


```

### parameter properties

- constructor এর ভিতরে public লিখে দিলে public type define কিরে দিবে সাথে initialize ও করে দিবে
- তখন constructor এর ভিতরে কিছু set করতে হবেনা
- একে parameter property বলে

```

  class Animal {
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {}

    makeSound() {
      console.log(`the ${this.name} making sound: ${this.sound}`);
      return;
    }
  }

  const dog = new Animal("German Shephard", "dog", "bark");

  const cat = new Animal("Persian", "cat", "Meaw");

  // cat.makeSound();
  //  dog.makeSound();
  console.log(dog.makeSound());


```

- এতে কোন property initialize করতে হয়না আবার constructor এর ভিতর ‍set ও করতে হয়না

## 3-2 Inheritance in oop

## 3-3 Type guard using typeof and in

## 3-4 Type guard using instance of

## 3-5 Access modifiers

## 3-6 Getter and setter

## 3-7 Statics in OOP

## 3-8 Polymorphism

## 3-9 Abstraction in OOP

## 3-10 Encapsulation in OOP
