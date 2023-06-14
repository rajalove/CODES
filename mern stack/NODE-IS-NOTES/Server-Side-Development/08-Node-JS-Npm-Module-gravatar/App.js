const gravatar=require('gravatar');
const bcrypt=require('bcryptjs');

//user....................

/*
let user={
    name:'rajasekhar',
    age:26,
    email:'rajasekhar098@gmail.com',
    password:'raja@1234',

}


const images=gravatar.url(user.email,{
    s:'200',
    r:'pg',
    d:'mm',
})

console.log(images)
*/


// _____________________________________________________________

//user....................

let user={
    name:'rajasekhar',
    age:26,
    email:'rajasekhar098@gmail.com',
    password:'raja@1234',

}

//encrypt the password............................................................

const salt=bcrypt.genSaltSync(10);
user.password=bcrypt.hashSync(user.password,salt);
// const hashedPassword=bcrypt.hashSync(user.password,salt);

// console.log(hashedPassword)

// get gravatar image........................................................................................
const image=gravatar.url(user.email,{
    s:'200',
    r:'pg',
    d:'mm',
})

// console.log(images)

let updatedUserDetails={
    ...user,
    images: image,
    // password:hashedPassword,
}

console.log(updatedUserDetails);

