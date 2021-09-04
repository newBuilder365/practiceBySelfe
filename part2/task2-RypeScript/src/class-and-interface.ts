export {};

interface Eat {
  eat(food: string): void;
}

interface Run {
  run(distance: number): void;
}

class Person implements Eat, Run {
  eat(food: string): void {
    console.log(`吃饭，${food}`);
  }

  run(distance: number): void {
    console.log(`爬行，${distance}米`);
  }
}

class Dog implements Eat, Run {
  eat(food: string): void {
    console.log(`吃饭，${food}`);
  }

  run(distance: number): void {
    console.log(`爬行，${distance}米`);
  }
}
