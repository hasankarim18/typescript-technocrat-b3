// function

function add(a: number, b: number): number {
  return a + b;
}

const result = add(2, 3);

console.log(result);

const addArror = (a: number, b: number = 10): number => a + b;

const result2 = addArror(3);

console.log({ result2 });

const richUser: {
  name: string;
  balance: number;
  addBalance: (balance: number) => string;
} = {
  name: "Hasan",
  balance: 0,
  addBalance(balance: number): string {
    return `My new balance is ${this.balance + balance}`;
  },
};

const arr: number[] = [1, 4, 10];

const newArray: number[] = arr.map((elem: number): number => elem * elem);

console.log(newArray);

const squreArray = (arr: number[]): number[] => {
  return arr.map((elem: number): number => elem * elem);
};

const sq = squreArray(arr);

console.log({ sq });
