"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
            const data = "something";
            if (data) {
                resolve(data);
            }
            else {
                reject("Failed to load data");
            }
        });
    };
    // calling the promise
    const showData = () => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield createPromise();
        console.log(data);
    });
    showData();
    //
}
{
    // ‍Step Two
    // ‍solving promise type script
    // যেহেতু আমরা string return করতেছি তাই promise থেকে তাই
    // createPromise ---> Promise<string> return করতেছে
    const createPromise = () => {
        return new Promise((resolve, reject) => {
            const data = "something ts";
            if (data) {
                resolve(data);
            }
            else {
                reject("Failed to load data");
            }
        });
    };
    // 1.  এখানে Promise, string return করবে ``
    // calling the promise
    // showData যদি return না করি তাহলে promise<void> হবে
    // আর আমরা যদি return data করি তাহলে promise<string> দেখাবে
    const showData = () => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield createPromise();
        console.log(data);
        return data;
    });
    showData();
}
{
    // ‍Step Three
    // smae বিষয়টা আমরা boolean এর জন্যও করতে পারি
    const createPromise = () => {
        //আমরা Promise কে বলে দিছি তুমি Promise<boolean> return কর
        return new Promise((resolve, reject) => {
            const data = true;
            if (data) {
                resolve(data);
            }
            else {
                reject("Failed to load data");
            }
        });
    };
    // এক্ষেত্রে showData Promise<void> দেখােচ্ছে কারন showData থেকে কোন কিছু return করা হয় নাই
    const showData = () => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield createPromise();
        console.log(data);
    });
    // এক্ষেত্রে showData Promise<boolean> দেখােch কারন showData থেকে boolean return করা হয়েছে
    const showData1 = () => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield createPromise();
        return data;
    });
    showData();
}
{
    const createPromise = () => {
        return new Promise((resolve, reject) => {
            const data = { someThing: "some-thing" };
            if (data) {
                return resolve(data);
            }
            else {
                return reject("Failed to load data");
            }
        });
    };
    // উপরের function return করবে Promise<object> type এর  data
    // নিচের function return করবে Promise<object> type এর  data
    const showData = () => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield createPromise();
        console.log(data);
        return data;
    });
    showData();
}
{
    // step five
    const url = "https://jsonplaceholder.typicode.com/todos";
    // Promise<void> কেননা কোন কিছু return করতেছেনা
    const getTodo = () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield fetch(url);
        const data = yield res.json();
        // console.log(data);
    });
    getTodo();
    // Promise<any> -- by default
    const getTodo1 = () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield fetch(url);
        const data = yield res.json();
        return data;
    });
    getTodo1();
    // এখানে
    const getTodo2 = () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield fetch(url);
        const data = yield res.json();
        console.log(data);
        return data;
    });
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
