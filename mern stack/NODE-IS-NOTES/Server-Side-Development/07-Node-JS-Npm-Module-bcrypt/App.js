const bcryptjs=require('bcryptjs');

// user.........................

//encrypt..........................................................

/*  //password encrypt process

let user={
    name:'rajasekhar',
    age:'26 years',
    email:'rajasekhar098@gmail.com',
    password:'raj76@loves',
}

const salt=bcryptjs.genSaltSync(10);
let hashedPassword=bcryptjs.hashSync(user.password,salt);
console.log(hashedPassword);
*/

//________________________________________________________________________________


let user={
    name:'rajasekhar',
    age:'26 years',
    email:'rajasekhar098@gmail.com',
    password:'raj76@loves',
}

const salt=bcryptjs.genSaltSync(10);
let hashedPassword=bcryptjs.hashSync(user.password,salt);
// console.log(hashedPassword);

let updateUser={

      ...user,
     password:hashedPassword,        //password with user details............
}

// console.log(updateUser); 


//decrypt...............................(decrypt the password)...........

let isMatch=bcryptjs.compareSync('raj76@loves',hashedPassword)

if(isMatch){
    console.log('login successful');
}
else{
    console.log('invalid password');
}
