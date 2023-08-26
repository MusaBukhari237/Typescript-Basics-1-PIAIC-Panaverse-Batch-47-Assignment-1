// They think of something you could store in a TypeScript Object.Write a program that creates Objects containing these items.

class Person {
  name: string;
  age: number;
  role: "CEO" | "COO"

  constructor(name: string, age: number, role: "CEO" | "COO") {
    this.name = name;
    this.age = age;
    this.role = role
  }
}

let person1 = new Person("Musa", 17, "CEO");
console.log(person1);
