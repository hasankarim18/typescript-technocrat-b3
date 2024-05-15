{
  console.log("asynchronous tyepscript");
  // ‍Step One
  // basic promise
  // js promise either resolved or rejected
  // promise in Javascript
  // simulate
  // এখানে return unknown দেখাচ্ছে এটাকে আমরা solve করব নিচে
  const createPromise = () => {
    return new Promise((resolve, reject) => {
      const data: string = "something";
      if (data) {
        resolve(data);
      } else {
        reject("Failed to load data");
      }
    });
  };

  // calling the promise
  const showData = async () => {
    const data = await createPromise();
    console.log(data);
  };

  showData();

  //
}

{
  // ‍Step Two
  // ‍solving promise type script
  // যেহেতু আমরা string return করতেছি তাই promise থেকে তাই
  // createPromise ---> Promise<string> return করতেছে
  const createPromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const data: string = "something ts";
      if (data) {
        resolve(data);
      } else {
        reject("Failed to load data");
      }
    });
  };

  // 1.  এখানে Promise, string return করবে ``

  // calling the promise
  // showData যদি return না করি তাহলে promise<void> হবে
  // আর আমরা যদি return data করি তাহলে promise<string> দেখাবে
  const showData = async (): Promise<string> => {
    const data: string = await createPromise();
    console.log(data);
    return data;
  };

  showData();
}

{
  // ‍Step Three
  // smae বিষয়টা আমরা boolean এর জন্যও করতে পারি
  const createPromise = (): Promise<boolean> => {
    //আমরা Promise কে বলে দিছি তুমি Promise<boolean> return কর
    return new Promise<boolean>((resolve, reject) => {
      const data: boolean = true;
      if (data) {
        resolve(data);
      } else {
        reject("Failed to load data");
      }
    });
  };

  // এক্ষেত্রে showData Promise<void> দেখােচ্ছে কারন showData থেকে কোন কিছু return করা হয় নাই
  const showData = async () => {
    const data: boolean = await createPromise();
    console.log(data);
  };

  // এক্ষেত্রে showData Promise<boolean> দেখােch কারন showData থেকে boolean return করা হয়েছে
  const showData1 = async (): Promise<boolean> => {
    const data: boolean = await createPromise();
    return data;
  };

  showData();
}

{
  // ‍Step Four
  // যদি আমরা object কে পাঠাই
  type SomeThing = {
    someThing: string;
  };
  const createPromise = (): Promise<SomeThing> => {
    return new Promise<SomeThing>((resolve, reject) => {
      const data: SomeThing = { someThing: "some-thing" };
      if (data) {
        return resolve(data);
      } else {
        return reject("Failed to load data");
      }
    });
  };

  // উপরের function return করবে Promise<object> type এর  data

  // নিচের function return করবে Promise<object> type এর  data

  const showData = async (): Promise<SomeThing> => {
    const data: SomeThing = await createPromise();
    console.log(data);
    return data;
  };

  showData();
}

{
  // step five
  const url = "https://jsonplaceholder.typicode.com/todos";

  // Promise<void> কেননা কোন কিছু return করতেছেনা
  const getTodo = async () => {
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data);
  };
  getTodo();

  // Promise<any> -- by default
  const getTodo1 = async () => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  };
  getTodo1();
  // যেহেতু api data object, array, array of object, nesting object অনেক রকম nesting হিসাবে থাকতে পারে তাই by default -- Promise<any> থাকে

  // এখানে আমরা দেখতেছি আমাদের পাঠানো data ছোট data এবং array of object তাই আমরা specific ভাবে return object type তৈরি কেরতে পারি

  type Todo = {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
  };

  // এখানে
  const getTodo2 = async (): Promise<Todo[]> => {
    const res = await fetch(url);
    const data: Todo[] = await res.json();
    console.log(data);
    return data;
  };
  getTodo2();
}

/**
 [
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
]
 */
