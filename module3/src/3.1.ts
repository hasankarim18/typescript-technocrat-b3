{
  console.log("Class and object");
  // oop - class

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
      return;
    }
  }

  const dog = new Animal("German Shephard", "dog", "bark");

  const cat = new Animal("Persian", "cat", "Meaw");

  // cat.makeSound();
  //  dog.makeSound();
  console.log(dog.makeSound());

  //
}

{
  console.log("Class and object");
  // oop - class

  class Animal {
    public animalName: string;
    public animalSpecies: string;
    public animalSound: string;

    // parameter properties

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

  //
}

{
  console.log("Class and object");
  // oop - class
  // constructor এর ভিতরে public লিখে দিলে public type define কিরে দিবে সাথে   initialize ও করে দিবে
  // - তখন constructor এর ভিতরে কিছু set করতে হবেনা
  // - একে parameter property বলে
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

  //
}
