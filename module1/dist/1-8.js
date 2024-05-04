"use strict";
{
    // destructuring in typescript
    const user = {
        id: 345,
        name: {
            firstName: "Hasan",
            middleName: "Mahbub ul",
            lastName: "Karim",
        },
        email: "hasan@mail.com",
        address: "Uganda",
    };
    const { email, name: { middleName: midName }, } = user;
    /**
         you cannot declare type in destructuring
         when you declare a name in destructuring it will    work as `name alias`
     
     */
    console.log(midName);
    // Array destructuring
    const myFriends = [
        "Abul",
        "Kabul",
        "Dabul",
        "Sabul",
        "Ross",
        "monika",
        "fibi",
        "gibi",
    ];
    const [a, b, bestFriend] = myFriends;
    const [, , , ememy, ...rest] = myFriends;
    console.log(rest);
}
