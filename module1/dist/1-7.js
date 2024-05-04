"use strict";
{
    // spread operatior
    // rest operator
    // destructuring
    /** spread operator */
    const bros1 = ["Mir", "Mizan", "Firoz"];
    const bros2 = ["Tonmoy", "Nahid", "Rahat"];
    //  bros1.push(bros2); wrong apporach will show error
    bros1.push(...bros2); // write approach
    console.log(bros1);
    /* Obejcts */
    const mentors1 = {
        typeScript: "Mezba",
        redux: "Mir",
        dbms: "Mizan",
    };
    const mentors2 = {
        prisma: "firoz",
        next: "Tonmoy",
        cloud: "Nahid",
    };
    const mentorList = Object.assign(Object.assign({}, mentors1), mentors2);
    // console.log({ mentorList });
    /** Learn rest operator */
    const greetFriends = (...friends) => {
        console.log(friends);
        const output = `
        Hi ${friends.map((item) => item).join(", ")} 
     `;
        console.log(output);
        return "hello";
    };
    greetFriends("Abul", "dabul", "kabul", "ubul");
}
