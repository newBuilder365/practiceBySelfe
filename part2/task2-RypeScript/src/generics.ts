export {};

const createNumberArray = (length: number, value: number) => {
  console.log(Array<number>(length).fill(value));
};

const createStringArray = (length: number, value: string) => {
  console.log(Array<string>(length).fill(value));
};

//通过泛型可以使函数能够复用
const createArray = <T>(length: number, value: T) => {
  console.log(Array<T>(length).fill(value));
};
